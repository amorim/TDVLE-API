package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

class UsersController {

    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index(Long offset, Long max) {
        render User.list(offset: offset, max: max) as JSON
    }

    def count() {
        def count = [userCount: User.count]
        render count as JSON
    }
}
