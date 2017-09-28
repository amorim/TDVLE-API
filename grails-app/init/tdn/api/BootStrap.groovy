package tdn.api

import com.tdnsecurerest.Authority
import com.tdnsecurerest.User
import com.tdnsecurerest.UserAuthority

class BootStrap {

    def init = { servletContext ->

        def role1 = new Authority(authority:"ROLE_USER").save flush:true
        def user1 = new User(username:"senpai",password:"nil").save flush:true
        UserAuthority.create(user1,role1)
    }
    def destroy = {
    }

}
