package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

import javax.annotation.security.RolesAllowed


class FollowersController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index(Long id, Long offset, Long max) {
        render User.get(id).followers as JSON
    }

    def followerCount() {
        def followerCount = [followerCount: User.get(springSecurityService.principal.id).followers.size()]
        render followerCount as JSON
    }

    def save(Long id) {
        User u = User.get(id)
        u.addToFollowers(User.get(springSecurityService.principal.id))
        u.save(flush: true, failOnError: true)
        render u.followers as JSON
    }

    def delete(Long id) {
        User u = User.get(id)
        u.removeFromFollowers(User.get(springSecurityService.principal.id))
        u.save(flush: true, failOnError: true)
        render u.followers as JSON
    }

    def following(Long id, Long offset, Long max) {
        List user = User.executeQuery("from User as u where :user in elements(u.followers)", [user: User.get(id)], [offset: offset, max: max])
        render user as JSON
    }
}
