package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed

@RolesAllowed(["ROLE_USER"])
class PostController {


    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        respond Post.listOrderByDate(order: "desc")
    }

    def save(Post post) {
        post.user = User.get(id: springSecurityService.principal.id)
        post.date = new Date()
        post.save(flush:true, failOnError: true)
        render(status: 201, post as JSON)
    }
}
