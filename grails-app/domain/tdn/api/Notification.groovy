package tdn.api

import com.tdnsecuredrest.User

class Notification {

    static belongsTo = [destUser: User, fromUser: User]

    String message
    //String uri
    boolean read
    Date date

    static constraints = {

    }
}
