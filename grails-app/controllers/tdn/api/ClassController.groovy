package tdn.api

import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.converters.JSON


class ClassController {
    transient springSecurityService
    static transients = ['springSecurityService']


    def getAllClasses(Long max, Long offset) {
        def au = User.findById(springSecurityService.principal.id)
        if (UserAuthority.findByUserAndAuthority(au, Authority.findByAuthority("ROLE_TEACHER"))) {
            render Class.findAllByTeacher(au, [max: max, offset: offset]) as JSON
        }
        else {
            render UserClass.findAllByUser(au, [max: max, offset: offset]).clazz as JSON
        }
    }

    def getClazz(Long id) {
        User au = User.get(springSecurityService.principal.id)
        Class cs = Class.get(id)
        if (UserClass.countByUserAndClazz(au, cs) || cs.teacher == au) {
            List<Quiz> quizList = Quiz.findAllByClazz(Class.get(id))
            println quizList
            render quizList as JSON
        } else {
            render(status: 401, [] as JSON)
        }
    }

    def enterClass(Class bug) {
        String classAccessCode = bug.classAccessCode
        if (Class.countByClassAccessCode(classAccessCode)) {
            User au = User.get(springSecurityService.principal.id)
            Class clazz = Class.findByClassAccessCode(classAccessCode)
            UserClass userClass = new UserClass(user: au, clazz: clazz)
            userClass.save(flush: true, failOnError: true)
            render(status: 200, clazz as JSON)
        } else {
            render(status: 401, [] as JSON)
        }
    }

    def createClass(Class clazz) {
        User au = User.get(springSecurityService.principal.id)
        clazz.teacher = au
        clazz.active = true
        def classAccessCode = UUID.randomUUID().toString()
        clazz.classAccessCode = classAccessCode
        clazz.save(flush: true, failOnError: true)
        render clazz as JSON
    }

    def classCount() {
        def au = User.findById(springSecurityService.principal.id)
        def count = ['']
        if (UserAuthority.findByUserAndAuthority(au, Authority.findByAuthority("ROLE_TEACHER"))) {
            count = ['classCount': Class.countByTeacher(au)]
        }
        else {
            count = ['classCount': UserClass.countByUser(au)]
        }
        render count as JSON
    }
}
