package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

class NotificationController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        println "API prepared a notification" + Notification.findAll("from Notification as n where n.destUser = ? order by n.date",
                [User.get(springSecurityService.principal.id)])
        render Notification.findAll("from Notification as n where n.destUser = ? order by n.date desc",
                [User.get(springSecurityService.principal.id)], [max: 10]) as JSON
    }

    def count() {
        def count = [notificationCount: Notification.countByDestUserAndRead(User.get(springSecurityService.principal.id), false)]
        render count as JSON
    }

    def read() {
        Notification.executeUpdate("update Notification n set n.read = true where n.destUser = :user", [user: User.get(springSecurityService.principal.id)])
        render(status:200, [] as JSON)
    }
}
