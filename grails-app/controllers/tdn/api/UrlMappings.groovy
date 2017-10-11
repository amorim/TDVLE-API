package tdn.api

class UrlMappings {

    static mappings = {

        '/api/user'(controller: 'user') {
            action = [GET: 'show']
        }

        '/api/user/post'(controller: 'post') {
            action = [POST: 'save', GET: 'index']
        }

        '/api/register'(controller: 'register') {
            action = [POST: 'save']
        }

        '/api/users/$id/followers'(controller: 'followers') {
            action = [POST: 'save', GET: 'index']
        }


        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
