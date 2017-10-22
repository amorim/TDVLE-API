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

            group "/notifications", {
                "/"(controller: 'notification') {
                    action = [GET: 'index']
                }
                "/count"(controller: 'notification') {
                    action = [GET: 'count']
                }
                "/read"(controller: 'notification') {
                    action = [POST: 'read']
                }
            }

            group "/users", {
                "/"(controller: 'users') {
                    action = [GET: 'index']
                }
                "/count"(controller: 'users') {
                    action = [GET: 'count']
                }
                "/posts"(controller: 'post') {
                    action = [GET: 'posts']
                }
                "/posts/count"(controller: 'post') {
                    action = [GET: 'count']
                }
                "/$id/followers"(controller: 'followers') {
                    action = [POST: 'save', DELETE: 'delete', GET: 'index']
                }
                "/follower/count"(controller: 'followers') {
                    action = [GET: 'followerCount']
                }
                "/$id/following"(controller: 'followers') {
                    action = [GET: 'following']
                }
            }

            group "/posts", {
                "/like"(controller: 'post') {
                    action = [PUT: 'like']
                }
            }
        }


        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
