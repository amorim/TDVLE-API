package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class AppController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def requestIntegration(IntegratedApp ia) {
        ia.save(flush: true)
        def users = UserAuthority.findAllByAuthority(Authority.findByAuthority('ROLE_ADMIN')).user
        def notifMessage = "App Integration Request"
        def date = new Date()
        def user = User.get(springSecurityService.principal.id)
        users.each {
            Notification n = new Notification(message: notifMessage, date: date,
                    read: false, destUser: it, fromUser: user)
            n.save()
        }
        render(status: 201, ia as JSON)
    }

    def approveRequest(Long id) {
        IntegratedApp ia = IntegratedApp.findById(id)
        ia.approved = true
        ia.save()
        render ia as JSON
    }

    def getAllApps() {
        render IntegratedApp.all as JSON
    }

    def getVisibleApps() {
        render IntegratedApp.findAllByApproved(true) as JSON
    }
}
