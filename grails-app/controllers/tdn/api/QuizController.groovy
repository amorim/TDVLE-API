package tdn.api

import com.tdnsecuredrest.User
import grails.async.Promise
import grails.converters.JSON
import grails.http.client.AsyncHttpBuilder
import grails.http.client.HttpClientResponse
import org.grails.web.json.JSONObject

class QuizController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index(Long id) {
        Quiz quiz = Quiz.get(id)
        render quiz as JSON
    }

    def getProblem(Long id, Long offset) {
        Quiz quiz = Quiz.get(id)
        if (offset < quiz.problems.size() && offset >= 0) {
            render quiz.problems[offset] as JSON
        }
        else {
            render(status: 999, [] as JSON)
        }
    }

    def getQuiz(Long classId, Long quizId) {
        User au = User.get(springSecurityService.principal.id)
        Class clazz = Class.findById(classId)
        Quiz quiz = Quiz.findByClazzAndId(clazz, quizId)
        if (UserClass.countByClazzAndUser(clazz, au)) {
            if (QuizAnswer.countByStudentAndQuiz(au, quiz)) {
                def swi = ["switchStudent": true, "quiz": quiz]
                render swi as JSON
            } else {
                render quiz as JSON
            }
        } else if (clazz.teacher == au) {
            def swi = ["switchTeacher": true, "quiz": quiz]
            render swi as JSON
        } else {
            render(status: 404, [] as JSON)
        }
    }

    def getAnswers(Long classId, Long quizId) {
        Quiz quiz = Quiz.get(quizId)
        List<QuizAnswer> quizAnswerList = QuizAnswer.findAllByQuiz(quiz)
        println quizAnswerList
        render quizAnswerList as JSON
    }

    def createQuiz(Long id) {
        User au = User.get(springSecurityService.principal.id)
        println request.JSON
        Quiz quiz = new Quiz(request.JSON as JSONObject)
        quiz.clazz = Class.findById(id)
        quiz.uri = "/classes/" + quiz.clazz.id + "/quiz/"
        quiz.save(flush: true, failOnError: true)
        quiz.uri = quiz.uri + quiz.getId()
        quiz.save(flush: true, failOnError: true)
        List<User> userList = UserClass.findAllByClazz(quiz.clazz).user
        String dueDateFormated = quiz.dueDate.format("dd/MM/yyyy HH:mm")
        sendNotifications(au, userList, "Created a new quiz, due: ${dueDateFormated}", new Date(), quiz)
        render(status: 201, quiz as JSON)
    }

    def submit(Long classId, Long quizId, QuizAnswer quizAnswer) {
        User au = User.get(springSecurityService.principal.id)
        Class clazz = Class.get(classId)
        if (QuizAnswer.countByStudentAndQuiz(au, quizAnswer.quiz)) {
            render(status: 999, [])
            return
        }
        quizAnswer.student = User.get(springSecurityService.principal.id)
        quizAnswer.quiz = Quiz.get(quizId)
        if (quizAnswer.quiz.dueDate < new Date())
            render (status: 401, {} as JSON)
        quizAnswer.save(flush: true, failOnError: true)
        sendNotifications(quizAnswer.student, [clazz.teacher], "Submitted an answer", new Date(), quizAnswer.quiz)
        render(status: 201, [] as JSON)
    }

    def evaluateAnswer(Long classId, Long quizId, Evaluation evaluation) {
        User au = User.get(springSecurityService.principal.id)
        if (Evaluation.countByQuizAnswer(evaluation.quizAnswer)) {
            render(status: 999, [] as JSON)
            return
        }
        evaluation.save(flush: true, failOnError: true)
        println evaluation.quizAnswer.id
        sendNotifications(au, [evaluation.quizAnswer.student], "Evaluated your answer: ${evaluation.grade}%", new Date(), evaluation.quizAnswer.quiz)
        render(status: 201, [] as JSON)
    }

    void sendNotifications(User from, List<User> list, String notifMessage, Date date, Quiz q) {
        list.each {
            AsyncHttpBuilder client = new AsyncHttpBuilder()
            sendEmail(q.clazz.teacher.name + ", from " + q.clazz.name + ", posted a new activity at TDVLE. Click <a href='https://casaamorim.no-ip.biz:4000/classes/" + q.clazz.id + "/quiz/" + q.id + "'>here</a> to view this activity.", it.email, "New activity at TDVLE", client)
            Notification n = new Notification(message: notifMessage, date: date,
                    read: false, destUser: it, fromUser: from, uri: '/classes/' + q.clazz.id + '/quiz/' + q.id)
            n.save(flush: true, failOnError: true)
        }
    }

    def sendEmail(String body, String desti, String sub, AsyncHttpBuilder client) {

        Promise<HttpClientResponse> p = client.post("https://script.google.com/macros/s/AKfycbxEF5Mk5kSL8uu2aiaxfz6TW0iSFe6JBLKdqHNPYEQ7ZK72CXs/exec") {
            form {
                corpo = body
                dest = desti
                assunto = sub
            }
        }

        p.onComplete { HttpClientResponse resp ->
            println(resp.json.status)
        }
    }
}
