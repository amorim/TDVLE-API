package tdn.api

import com.tdnsecuredrest.User

class UserClass {

    static belongsTo = [user: User, clazz: Class]

    static constraints = {
        user(unique: ['clazz'])
    }
}
