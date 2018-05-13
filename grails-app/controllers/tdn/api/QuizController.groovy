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
        println request.JSON
        Quiz quiz = new Quiz(request.JSON as JSONObject)
        quiz.clazz = Class.findById(id)
        quiz.uri = "/classes/" + quiz.clazz.id + "/quiz/"
        quiz.save(flush: true, failOnError: true)
        quiz.uri = quiz.uri + quiz.getId()
        quiz.save(flush: true, failOnError: true)
        println quiz.problems[0].alternatives[0]
        render(status: 201, quiz as JSON)
    }

    def submit(Long classId, Long quizId, QuizAnswer quizAnswer) {
        println classId + " " + quizId + " -> " + quizAnswer
        quizAnswer.student = User.get(springSecurityService.principal.id)
        quizAnswer.quiz = Quiz.get(quizId)
        quizAnswer.save(flush: true, failOnError: true)
        println quizAnswer
        render(status: 201, [] as JSON)
    }
}
