package tdn.api

import com.tdnsecuredrest.User

class UserActivity {

    boolean delivered = false
    static belongsTo = [user: User, activity: ClassActivity]
    static hasMany = [submissions: Submission]

    static constraints = {
    }
}
