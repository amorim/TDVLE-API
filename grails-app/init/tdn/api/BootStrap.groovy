package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority

class BootStrap {

    def init = { servletContext ->

//        def role1 = new Authority(authority:"ROLE_USER").save flush:true
//        def user1 = new User(name:"senpai",username:"senpai",password:"nil",email:"senpai@s").save flush:true
//        UserAuthority.create(user1,role1)
    }
    def destroy = {

    }

}
