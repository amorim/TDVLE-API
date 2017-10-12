package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

class UsersController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        render User.all as JSON
    }
}
