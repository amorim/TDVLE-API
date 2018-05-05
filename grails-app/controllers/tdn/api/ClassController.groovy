package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority


class ClassController {
    transient springSecurityService
    static transients = ['springSecurityService']


    def getAllClasses() {
        def au = User.findById(springSecurityService.principal.id)
        if (UserAuthority.findByUserAndAuthority(au, Authority.findByAuthority("ROLE_TEACHER"))) {
            render Class.findAllByTeacher(au)
        }
        else {
            //TODO: isso aqui está lançando excecao e eu não vi
            render Class.findAll {
                it.users.contains(au)
            }
        }
    }
}
