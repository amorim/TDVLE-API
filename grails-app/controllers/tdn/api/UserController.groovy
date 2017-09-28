package tdn.api

import com.mysecurerest.User
import grails.rest.RestfulController

import javax.annotation.security.RolesAllowed

@RolesAllowed(["ROLE_USER"])
class UserController extends RestfulController {

    static responseFormats = ['json', 'xml']

    UserController() {
        super(User)
    }
}
