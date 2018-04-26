package tdn.api

import com.tdnsecuredrest.User

class Class {

    String name
    boolean active

    static hasMany = [users: User]
    static belongsTo = [teacher: User]
    static constraints = {
    }
}
