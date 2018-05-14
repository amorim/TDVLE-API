package tdn.api

class Evaluation {

    static belongsTo = [quizAnswer: QuizAnswer]

    int openScore
    int closedScore
    double grade

    static constraints = {
    }
}
