package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed


@RolesAllowed(["ROLE_USER"])
class FollowersController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index(Long id) {
        render User.get(id).followers as JSON
    }

    def save(Long id) {
        User u = User.get(id)
        u.addToFollowers(User.get(springSecurityService.principal.id))
        u.save(flush: true, failOnError: true)
        render u.followers as JSON
    }

    def delete(Long id) {
        User u = User.get(id)
        u.followers.remove(User.get(springSecurityService.principal.id))
        u.save(flush: true, failOnError: true)
        render u.followers as JSON
    }

    def following(Long id) {
        render User.executeQuery("from User as u where :user in elements(u.followers)", [user: User.get(id)]) as JSON
    }
}
