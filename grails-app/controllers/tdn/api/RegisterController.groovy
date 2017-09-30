package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority

class RegisterController {

    static allowedMethods = ["POST"]

    static responseFormats = ['json', 'xml']

    def index() { }


    def save(User user) {
        user.save(flush:true, failOnError: true)
        UserAuthority.create(user,  Authority.findByAuthority("ROLE_USER"))
    }
}