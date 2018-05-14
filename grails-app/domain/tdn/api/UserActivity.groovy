package tdn.api

import com.tdnsecuredrest.User

class UserActivity {

    String teacherEvaluation
    boolean evaluationComplete = false
    static belongsTo = [user: User, activity: ClassActivity]
    static hasMany = [submissions: Submission]

    static constraints = {
        teacherEvaluation nullable: true
    }
}
