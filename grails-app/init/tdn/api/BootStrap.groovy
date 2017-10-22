package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        TimeZone.setDefault(TimeZone.getTimeZone('UTC'))

        def role1 = new Authority(authority:"ROLE_USER").save flush:true
        def user1 = new User(name: "Senpai", username:"senpai", password:"nil", bornDate: new Date(), email: "senpai@hentai.net").save(flush: true, failOnError: true)
        UserAuthority.create(user1,role1)

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
