package tdn.api

import com.tdnsecuredrest.User

class Post {

    static belongsTo = [user: User]

    String title
    String description
    String image

    static constraints = {
        title blank: false
        description blank: false
        image nullable: true
    }
}
