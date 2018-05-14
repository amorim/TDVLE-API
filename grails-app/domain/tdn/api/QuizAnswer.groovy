package tdn.api

import com.tdnsecuredrest.User

class QuizAnswer {

    static belongsTo = [student: User, quiz: Quiz]
    static hasMany = [answers: ProblemAnswer]
    static hasOne = [evaluation: Evaluation]

    static constraints = {
        evaluation nullable: true
    }
}
