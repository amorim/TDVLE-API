package tdn.api

import grails.converters.JSON

class ProblemController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {

    }

    def createProblem(Long quizId, Problem problem) {
        Quiz quiz = Quiz.findById(quizId)
        quiz.problems.add(problem)
        quiz.save(flush: true, failOnError: true)
        render(status: 200, [] as JSON)
    }
}
