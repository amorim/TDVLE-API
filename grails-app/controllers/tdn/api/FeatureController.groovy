package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class FeatureController {
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        render JSON.parse(Features.findAll()[0].featuresJson) as JSON
    }

    def updateFeatures() {
        def au = User.findById(springSecurityService.principal.id)
        if (!UserAuthority.findByUserAndAuthority(au, Authority.findByAuthority("ROLE_ADMIN")))
            render status: 403
        def json = request.JSON
        Features features = Features.findAll()[0]
        features.featuresJson = json.toString()
        features.save(flush: true, failOnError: true)
        render(status: 201, json as JSON)
    }
}
