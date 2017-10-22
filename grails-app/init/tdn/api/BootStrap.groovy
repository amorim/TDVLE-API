package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        def role1 = new Authority(authority:"ROLE_USER").save flush:true
        def user1 = new User(name: "senpai", username:"senpai", password:"nil", bornDate: new Date(), email: "senpai@hentai.net").save(flush: true, failOnError: true)
        UserAuthority.create(user1,role1)
        if (Authority.findByAuthority('ROLE_ADMIN') == null) {
            new Authority(authority: 'ROLE_ADMIN').save flush: true
        }
        UserAuthority.create(user1, Authority.findByAuthority('ROLE_ADMIN'))
        JSON.registerObjectMarshaller(User) {
            def output = [:]
            output['id'] = it.id
            output['username'] = it.username
            output['name'] = it.name
            output['avatar'] = it.avatar
            return output
        }
    }
    def destroy = {

    }

}
