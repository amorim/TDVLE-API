package tdn.api

class Alternative {

    static belongsTo = [quiz: Problem]

    String description
    int alternativeId

    static constraints = {
    }
}
