package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON
import org.grails.web.json.JSONArray

class UsersController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index(Long offset, Long max) {
        List<User> list =  User.list(offset: offset, max: max)
        JSONArray arr = new JSONArray()
        List<User> following = User.executeQuery("from User as u where :user in elements(u.followers)",
                [user: User.get(springSecurityService.principal.id)])
        list.forEach {
            u -> def json = JSON.parse((u as JSON).toString())
                json.put("isFollowing", following.contains(u))
                arr.put(json);
        }
        render arr as JSON
    }

    def count() {
        def count = [userCount: User.count]
        render count as JSON
    }
}
