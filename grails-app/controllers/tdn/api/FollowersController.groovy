package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed


@RolesAllowed(["ROLE_USER"])
class FollowersController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index(int id) {
        respond User.get(id: id).followers as JSON
    }

    def save(int id) {
        User u = User.get(id: id)
        u.followers.add(User.get(id: springSecurityService.principal.id))
        u.save()
        render(status: 201, u.followers as JSON)
    }
}
