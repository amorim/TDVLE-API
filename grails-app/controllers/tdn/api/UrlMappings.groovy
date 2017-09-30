package tdn.api

class UrlMappings {

    static mappings = {

        '/api/user'(controller: 'user') {
            action = [GET: 'show']
        }

        '/api/register'(controller: 'register') {
            action = [POST: 'save']
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
