package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON
import org.grails.web.json.JSONArray

class AuthorityController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        User au = User.get(springSecurityService.principal.id)
        List<Authority> authorityList = Authority.findAll()
        JSONArray arr = new JSONArray()
        authorityList.forEach {
            a -> def json = JSON.parse((a as JSON).toString())
                json.put("enabled", UserAuthority.countByUserAndAuthority(au, a) > 0)
                arr.put(json)
        }
        render arr as JSON
    }

    def request(Authority authority) {
        List<User> adminList = UserAuthority.findAllByAuthority(Authority.findByAuthority("ROLE_ADMIN")).user
        println adminList
        Notification n = new Notification(message: notifMessage, date: date,
                read: false, destUser: it, fromUser: from, uri: '/post/' + p.id)
        n.save(flush: true, failOnError: true)
    }
}
