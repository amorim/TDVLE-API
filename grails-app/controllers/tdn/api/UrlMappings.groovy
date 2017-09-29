package tdn.api

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{    
            constraints {
                // apply constraints here
            }
        }

        '/api/user'(controller: 'user') {
            action = [GET: 'index', POST: 'save']
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
