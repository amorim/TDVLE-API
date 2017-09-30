package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority

class RegisterController {

    static allowedMethods = ["POST"]

    static responseFormats = ['json', 'xml']

    def index() { }

    def save(User user) {
        println ("Weeeee")
        // def user1 = new User(username:"senpai",password:"nil").save flush:true
        UserAuthority.create(user,Authority.get("ROLE_USER")).save()
    }
}
