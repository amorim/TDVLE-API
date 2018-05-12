package tdn.api

import grails.converters.JSON

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

    def createQuiz(Quiz quiz) {
        println "Before" + quiz.id
        quiz.save(flush: true, failOnError: true)
        println "After" + quiz.id
        quiz.uri = "/quiz/" + quiz.id
        quiz.save(flush: true, failOnError: true)
        render(status: 200, [] as JSON)
    }
}
