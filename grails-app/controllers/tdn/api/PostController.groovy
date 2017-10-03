package tdn.api

import com.tdnsecuredrest.User

import javax.annotation.security.RolesAllowed

@RolesAllowed(["ROLE_USER"])
class PostController {

    static allowedMethods = ["POST"]

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() { }

    def save(Post post) {
        post.user = User.get(springSecurityService.principal.id)
        post.save(flush:true, failOnError: true)
    }
}
