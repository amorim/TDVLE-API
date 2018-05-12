package tdn.api

class Problem {

    static belongsTo = [quiz: Quiz]

    int kind // 0 - open, 1 - multiple
    String description
    ArrayList<String> alternativeDescription
    int answer

    static constraints = {
        alternativeDescription nullable: true
    }
}
