package tdn.api

class ProblemAnswer {

    static belongsTo = [quizAnswer: QuizAnswer]

    String openAnswer
    int choice
    int choiceId
    int problemId

    static constraints = {
        openAnswer nullable: true
        choice nullable: true
        choiceId nullable: true
    }
}
