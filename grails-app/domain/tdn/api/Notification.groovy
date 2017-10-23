package tdn.api

import com.tdnsecuredrest.User

class Notification {

    static belongsTo = [destUser: User, fromUser: User]

    String message
    boolean read
    Date date

    static constraints = {
    }
}
