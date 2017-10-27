package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        TimeZone.setDefault(TimeZone.getTimeZone('UTC'))

//        def role1 = new Authority(authority:"ROLE_USER").save flush:true
//        def user1 = new User(name: "Senpai", username:"senpai", password:"nil", bornDate: new Date(), email: "senpai@hentai.net").save(flush: true, failOnError: true)
//        UserAuthority.create(user1,role1)
//        if (Authority.findByAuthority('ROLE_ADMIN') == null) {
//            new Authority(authority: 'ROLE_ADMIN').save flush: true
//        }
//        UserAuthority.create(user1, Authority.findByAuthority('ROLE_ADMIN'))

        JSON.registerObjectMarshaller(User) {
            def output = [:]
            output['id'] = it.id
            output['username'] = it.username
            output['name'] = it.name
            output['avatar'] = it.avatar
            output['background'] = it.background
            output['bornDate'] = it.bornDate
            output['authority'] = it.authorities
            return output
        }
    }
    def destroy = {

    }

}
