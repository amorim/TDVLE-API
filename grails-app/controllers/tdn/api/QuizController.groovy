package tdn.api

import grails.converters.JSON
import net.minidev.json.JSONObject
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

    def createQuiz(Long id) {
        println request.JSON
        Quiz quiz = new Quiz(request.JSON as JSONObject)
        quiz.clazz = Class.findById(id)
        quiz.uri = "/classes/" + quiz.clazz.id + "/quiz/"
        quiz.save(flush: true, failOnError: true)
        quiz.uri = quiz.uri + quiz.getId()
        quiz.save(flush: true, failOnError: true)
        render(status: 201, quiz as JSON)
    }
}
