package tdn.api

class Problem {

    static belongsTo = [quiz: Quiz]

    boolean kind // 0 - open, 1 - multiple
    String description
    ArrayList<String> alternativeDescription = new ArrayList<>()
    int answer

    static constraints = {
    }
}
