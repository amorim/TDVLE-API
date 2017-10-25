package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class AppController {

    transient springSecurityService
    static transients = ['springSecurityService']

    def requestIntegration(IntegratedApp ia) {
        IntegratedApp a = new IntegratedApp()
        a.owner = User.get(springSecurityService.principal.id)
        a.description = ia.description
        a.image = ia.image
        a.uri = ia.uri
        a.name = ia.name
        a.save(flush: true, failOnError: true)
        def users = UserAuthority.findAllByAuthority(Authority.findByAuthority('ROLE_ADMIN')).user
        def notifMessage = "App Integration Request"
        def date = new Date()
        def user = User.get(springSecurityService.principal.id)
        users.each {
            Notification n = new Notification(message: notifMessage, date: date,
                    read: false, destUser: it, fromUser: user)
            n.save()
        }
        render(status: 201, a as JSON)
    }

    def approveRequest(Long id) {
        IntegratedApp ia = IntegratedApp.findById(id)
        ia.approved = true
        ia.save(flush: true)
        render ia as JSON
    }

    def getAllApps() {
        render IntegratedApp.all as JSON
    }

    def getVisibleApps(Long max, Long offset) {
        render IntegratedApp.executeQuery("from IntegratedApp a where a.approved = true", [max: max, offset: offset]) as JSON
    }

    def count() {
        def count = ['appsCount': IntegratedApp.countByApproved(true)]
        render count as JSON
    }
}
