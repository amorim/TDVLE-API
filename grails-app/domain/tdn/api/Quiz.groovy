package tdn.api

class Quiz {

    static belongsTo = [clazz: Class]
    static hasMany = [problems: Problem]

    String title
    String detail
    Date dueDate
    String uri

    static constraints = {
        uri nullable: true
        dueDate nullable: true
    }
}
