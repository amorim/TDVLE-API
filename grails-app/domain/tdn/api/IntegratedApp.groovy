package tdn.api

import com.tdnsecuredrest.User

class IntegratedApp {

    String name
    String image
    String description
    String uri
    boolean approved

    static belongsTo = [owner: User]

    static constraints = {
        name blank: false, nullable: false
        image blank: false, nullable: false
        description blank: false, nullable: false
        uri blank: false, nullable: false
        approved defaultValue: "false"
    }
}
