package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        TimeZone.setDefault(TimeZone.getTimeZone('UTC'))
        if (Authority.findByAuthority('ROLE_USER') == null) {
            new Authority(authority: 'ROLE_USER', description: 'User role').save flush: true
        }
        if (Authority.findByAuthority('ROLE_ADMIN') == null) {
            new Authority(authority: 'ROLE_ADMIN', description: 'Admin role').save flush: true
        }
        if (Authority.findByAuthority('ROLE_TEACHER') == null) {
            new Authority(authority: 'ROLE_TEACHER', description: 'Teacher role').save flush: true
        }
        if (User.findByUsername("senpai") == null) {
            def user1 = new User(name: "Senpai", username: "senpai", password: "nil", bornDate: new Date(), email: "senpai@hentai.net").save(flush: true, failOnError: true)
            UserAuthority.create(user1, Authority.findByAuthority("ROLE_ADMIN"))
            UserAuthority.create(user1, Authority.findByAuthority('ROLE_USER'))
            UserAuthority.create(user1, Authority.findByAuthority('ROLE_TEACHER'))
        }
        if (Features.findAll().size() == 0) {
            Features f = new Features()
            f.featuresJson = "[{\"children\":[{\"displayName\":\"PayPal\",\"enabled\":true},{\"displayName\":\"Boleto\",\"enabled\":true}],\"displayName\":\"Payment Methods\"},{\"children\":[{\"displayName\":\"Text\",\"enabled\":true},{\"displayName\":\"Charts\",\"enabled\":true}],\"displayName\":\"Report Features\"},{\"children\":[{\"displayName\":\"Forum\",\"enabled\":true},{\"displayName\":\"Embedded Social Network\",\"enabled\":true}],\"displayName\":\"Social Platform Features\"},{\"children\":[{\"displayName\":\"Quizzes\",\"enabled\":true},{\"displayName\":\"Activities\",\"enabled\":true}],\"displayName\":\"Class Assignments\"}]"
            f.save(flush: true, failOnError: true)
        }
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

        JSON.registerObjectMarshaller(Class) {
            def output = [:]
            output['id'] = it.id
            output['name'] = it.name
            output['teacher'] = it.teacher
            output['classAccessCode'] = it.classAccessCode
            return output
        }

//        def script = "D:\\wamp\\bin\\php\\php5.6.35\\php D:/wamp/www/test.php"
//        def proc = script.execute()
//        proc.waitForOrKill(10000)
//        if(proc.exitValue()!=0){
//            println "[[return code: ${proc.exitValue()}]]"
//            println "[[stderr: ${proc.err.text}]]"
//        }else{
//            println "ok"
//        }
    }
    def destroy = {

    }

}
