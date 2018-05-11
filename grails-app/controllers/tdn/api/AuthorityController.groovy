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
        List<Authority> authorityList = Authority.findAll()
        JSONArray arr = new JSONArray()
        authorityList.forEach {
            a -> def json = JSON.parse((a as JSON).toString())
                json.put("enabled", UserAuthority.countByUserAndAuthority(au, a) > 0)
                arr.put(json)
        }
        render arr as JSON
    }

    def requestAuthorities(List<Authority> authorities) {
        User au = User.get(springSecurityService.principal.id)
        authorities = new ArrayList<>()
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
        println notifMessage

        List<User> adminList = UserAuthority.findAllByAuthority(Authority.findByAuthority("ROLE_ADMIN")).user
        for (i in adminList) {
            Notification n = new Notification(message: notifMessage, date: new Date(),
                read: false, destUser: i, fromUser: au, uri: '/authority/' + au.id)
            n.save(flush: true, failOnError: true)
        }
        render(status:200, [] as JSON)
    }
}
