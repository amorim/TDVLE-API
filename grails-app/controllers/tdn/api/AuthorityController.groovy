package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON
import groovy.json.JsonSlurper
import org.grails.web.json.JSONArray

class AuthorityController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        User au = User.get(springSecurityService.principal.id)
        JSONArray arr = getAuthorities(au)
        render arr as JSON
    }

    def getAll() {
        render Authority.findAll() as JSON
    }

    def getAuthoritiesFromUser(Long id) {
        User u = User.get(id)
        JSONArray arr = getAuthorities(u)
        render arr as JSON
    }

    def requestAuthorities() {
        User au = User.get(springSecurityService.principal.id)
        List<Authority> authorities = new ArrayList<>()
        def json = request.JSON
        for (i in json) {
            if (i["enabled"] == true) {
                Authority authority = JSON.parse(i.toString()).asType(Authority)
                authorities.add(authority)
            }
        }

        String notifMessage = au.name + " requested: "
        int now = 0
        for (i in authorities) {
            if (now) notifMessage = notifMessage + ", "
            notifMessage = notifMessage + i.description
            now += 1
        }

        List<User> adminList = UserAuthority.findAllByAuthority(Authority.findByAuthority("ROLE_ADMIN")).user
        for (i in adminList) {
            Notification n = new Notification(message: notifMessage, date: new Date(),
                read: false, destUser: i, fromUser: au, uri: '/authority/' + au.id)
            n.save(flush: true, failOnError: true)
        }
        render(status:200, [] as JSON)
    }

    def setAuthorities(Long id) {
        if (UserAuthority.countByUserAndAuthority(User.findById(springSecurityService.principal.id), Authority.findByAuthority("ROLE_ADMIN")) == 0) {
            render(status: 401)
            return
        }
        User u = User.get(id)
        def json = request.JSON
        for (i in json) {
            Authority authority = JSON.parse(i.toString()).asType(Authority)
            authority = Authority.findByAuthority(authority.authority)
            if (i["enabled"] == true && UserAuthority.countByUserAndAuthority(u, authority) == 0) {
                UserAuthority userAuthority = new UserAuthority(user: u, authority: authority)
                userAuthority.save(flush: true, failOnError: true)
            } else if (i["enabled"] == false && UserAuthority.countByUserAndAuthority(u, authority) > 0) {
                UserAuthority.findByUserAndAuthority(u, authority).delete(flush: true, failOnError: true)
            }
        }
        render(status: 200, [] as JSON)
    }

    JSONArray getAuthorities(User u) {
        List<Authority> authorityList = Authority.findAll()
        JSONArray arr = new JSONArray()
        authorityList.forEach {
            a -> def json = JSON.parse((a as JSON).toString())
                json.put("enabled", UserAuthority.countByUserAndAuthority(u, a) > 0)
                arr.put(json)
            }
        return(arr)
    }
}
