package tdn.api

class Submission {

    String url
    Date submissionDate


    static belongsTo = [userActivity: UserActivity]

    static constraints = {
    }
}
