package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed

@RolesAllowed(["ROLE_USER"])
class PostController {

    static allowedMethods = ["POST"]

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        respond Post.findAllWhere(user: User.get(springSecurityService.principal.id)).reverse()
    }

    def save(Post post) {
        post.user = User.get(springSecurityService.principal.id)
        post.save(flush:true, failOnError: true)
        render(status: 201, post as JSON)
    }
}
