package tdn.api

import com.tdnsecuredrest.User

class Class {

    String name
    boolean active
    String classAccessCode

    static hasMany = [activities: ClassActivity, quizes: Quiz]
    static belongsTo = [teacher: User]

    static constraints = {
    }
}
