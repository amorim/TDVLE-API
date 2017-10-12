package tdn.api

class UrlMappings {

    static mappings = {
        group "/api", {
            '/user'(controller: 'user') {
                action = [GET: 'show']
            }

            '/user/post'(controller: 'post') {
                action = [POST: 'save', GET: 'index']
            }

            '/register'(controller: 'register') {
                action = [POST: 'save']
            }

            group "/users", {
                "/$id/followers"(controller: 'followers') {
                    action = [POST: 'save', GET: 'index']
                }
                "/$id/following"(controller: 'followers') {
                    action = [GET: 'following']
                }
            }
        }


        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
