package tdn.api

class Problem {

    static belongsTo = [quiz: Quiz]

    int kind // 0 - open, 1 - multiple
    String description
    ArrayList<String> alternativeDescription
    char answer

    static constraints = {
        answer nullable: true
        alternativeDescription nullable: true
    }
}
