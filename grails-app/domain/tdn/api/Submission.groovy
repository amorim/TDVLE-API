package tdn.api

class Submission {

    String url
    String fileName
    String fileType
    Date submissionDate


    static belongsTo = [userActivity: UserActivity, classActivity: ClassActivity]

    static constraints = {
        userActivity nullable: true
        classActivity nullable: true
        submissionDate nullable: true
    }
}
