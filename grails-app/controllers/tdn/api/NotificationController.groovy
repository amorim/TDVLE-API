package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed

@RolesAllowed(['ROLE_USER'])
class NotificationController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        render Notification.findAll("from Notification as n where n.destUser = ? order by n.date",
                [User.get(springSecurityService.principal.id)]) as JSON
    }

    def count() {
        render(contentType: 'application/json') {
            unreadNotifications {
                Notification.countByDestUserAndRead(User.get(springSecurityService.principal.id), false)
            }
        }
    }
}
