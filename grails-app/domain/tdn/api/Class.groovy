package tdn.api

import com.tdnsecuredrest.User

class Class {

    String name
    boolean active
    String classAccessCode

    static hasMany = [users: User, activities: ClassActivity]
    static belongsTo = [teacher: User]

    static constraints = {
    }
}
