package tdn.api

class Problem {

    static belongsTo = [quiz: Quiz]
    static hasMany = [alternatives: Alternative]

    boolean kind // 0 - open, 1 - multiple
    String description
    int answer
    int problemId

    static constraints = {
    }
}
