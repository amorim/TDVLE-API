package tdn.api

class ClassActivity {

    static belongsTo = [clazz: Class]
    static hasMany = [teacherSubmissions: Submission]
    String title
    String detail
    Date dueDate
    String uri

    static constraints = {
        uri nullable: true
    }
}
