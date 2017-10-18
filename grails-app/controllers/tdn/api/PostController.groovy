package tdn.api

import com.tdnsecuredrest.User
import grails.converters.JSON

import javax.annotation.security.RolesAllowed

@RolesAllowed(["ROLE_USER"])
class PostController {

    static notifMessage = 'Posted new content'
    static responseFormats = ['json', 'xml']
    transient springSecurityService
    static transients = ['springSecurityService']

    def index() {
        render Post.findAll("from Post as p where p.user = ? order by p.date desc", [User.get(springSecurityService.principal.id)]) as JSON
    }

    def posts(Long offset, Long max) {
        println offset + " " + max
        render Post.findAll("from Post as p where p.user.id in (select u.id from User as u where :user in elements(u.followers)) or p.user = :user order by p.date desc", [user: User.get(springSecurityService.principal.id)], [offset: offset, max: max]) as JSON
    }

    def count() {
        def count = [postCount: Post.findAll("from Post as p where p.user.id in (select u.id from User as u where :user in elements(u.followers)) or p.user = :user order by p.date desc", [user: User.get(springSecurityService.principal.id)]).size()]
        render count as JSON
    }

    def save(Post post) {
        post.user = User.get(springSecurityService.principal.id)
        post.date = new Date()
        post.save(flush:true, failOnError: true)
        post.user.followers.each {
            Notification u = new Notification(message: notifMessage, date: post.date,
                    read: false, destUser: it, fromUser: post.user)
            u.save(failOnError: true)
        }
        render(status: 201, post as JSON)
    }
}
