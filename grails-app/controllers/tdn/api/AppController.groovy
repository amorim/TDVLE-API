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
        a.approved = false
        a.save(flush: true, failOnError: true)
        def users = UserAuthority.findAllByAuthority(Authority.findByAuthority('ROLE_ADMIN')).user
        def notifMessage = "App Integration Request"
        def date = new Date()
        def user = User.get(springSecurityService.principal.id)
        users.each {
            Notification n = new Notification(message: notifMessage, date: date,
                    read: false, destUser: it, fromUser: user, uri: '/apps/' + a.id)
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

    boolean isAdmin(User user) {
        return user.authorities.contains(Authority.findByAuthority('ROLE_ADMIN'))
    }

    def getAllApps(Long max, Long offset) {
        if (isAdmin(User.get(springSecurityService.principal.id))) {
            render IntegratedApp.findAll([max: max, offset: offset]) as JSON
        } else {
            render IntegratedApp.executeQuery("from IntegratedApp a where a.approved = true", [max: max, offset: offset]) as JSON
        }
    }

    def getApp(Long id) {
        if ((!IntegratedApp.get(id).approved && isAdmin(User.get(springSecurityService.principal.id))) || (IntegratedApp.get(id).approved)) {
            render IntegratedApp.get(id) as JSON
        }
        render(status: 401, [] as JSON)
    }

    def deleteApp(Long id) {
        if (isAdmin(User.get(springSecurityService.principal.id))) {
            IntegratedApp.get(id).delete(flush: true)
            render(status: 200, [] as JSON)
        }
        render(status: 401, [] as JSON)
    }

    def count() {
        def count = ['']
        if (isAdmin(User.get(springSecurityService.principal.id))) {
            count = ['appsCount': IntegratedApp.count]

        } else {
            count = ['appsCount': IntegratedApp.countByApproved(true)]
        }
        render count as JSON
    }
}
