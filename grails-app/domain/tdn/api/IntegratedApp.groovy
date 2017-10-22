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
    }
}
