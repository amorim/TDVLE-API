package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed

@RolesAllowed(['ROLE_USER'])
class NotificationController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        println "API prepared a notification" + Notification.findAll("from Notification as n where n.destUser = ? order by n.date",
                [User.get(springSecurityService.principal.id)])
        render Notification.findAll("from Notification as n where n.destUser = ? order by n.date desc",
                [User.get(springSecurityService.principal.id)]) as JSON
    }

    def count() {
        def count = Notification.countByDestUserAndRead(User.get(springSecurityService.principal.id), false)
        render count as JSON
    }
}
