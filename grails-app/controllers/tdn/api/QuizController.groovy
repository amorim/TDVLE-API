package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON
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
            render quiz as JSON
        } else if (clazz.teacher == au) {
            def swi = ["switch": true, "quiz": quiz]
            render swi as JSON
        } else {
            render(status: 999, [] as JSON)
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
        Class clazz = Class.get(classId)
        quizAnswer.student = User.get(springSecurityService.principal.id)
        quizAnswer.quiz = Quiz.get(quizId)
        quizAnswer.save(flush: true, failOnError: true)
        sendNotifications(quizAnswer.student, [clazz.teacher], "Submitted an answer", new Date(), quizAnswer.quiz)
        render(status: 201, [] as JSON)
    }

    def evaluateAnswer(Long classId, Long quizId, Evaluation evaluation) {
        User au = User.get(springSecurityService.principal.id)
        println evaluation.quizAnswer.id
        evaluation.save(flush: true, failOnError: true)
        println evaluation.quizAnswer.id
        sendNotifications(au, [evaluation.quizAnswer.student], "Evaluated your answer: ${evaluation.grade}%", new Date(), evaluation.quizAnswer.quiz);
        render(status: 201, [] as JSON)
    }

    void sendNotifications(User from, List<User> list, String notifMessage, Date date, Quiz q) {
        list.each {
            Notification n = new Notification(message: notifMessage, date: date,
                    read: false, destUser: it, fromUser: from, uri: '/classes/' + q.clazz.id + '/quiz/' + q.id)
            n.save(flush: true, failOnError: true)
        }
    }
}
