package tdn.api

class UrlMappings {

    static mappings = {

        group "/api", {

            group "/user", {
                '/'(controller: 'user') {
                    action = [GET: 'show']
                }

                '/post'(controller: 'post') {
                    action = [POST: 'save', GET: 'index']
                }

                '/followers'(controller: 'followers') {
                    action = [GET: 'index']
                }
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
                "/$id"(controller: 'notification') {
                    action = [DELETE: 'delete']
                }
            }

            group "/users", {
                "/"(controller: 'users') {
                    action = [GET: 'index']
                }
                "/count"(controller: 'users') {
                    action = [GET: 'count']
                }
                "/$id/followers"(controller: 'followers') {
                    action = [POST: 'save', DELETE: 'delete']
                }
                "/follower/count"(controller: 'followers') {
                    action = [GET: 'followerCount']
                }
                "/$id/following"(controller: 'followers') {
                    action = [GET: 'following']
                }
            }

            group "/apps", {
                "/"(controller: 'app') {
                    action = [GET: 'getVisibleApps', POST: 'requestIntegration']
                }
                "/all"(controller: 'app') {
                    action = [GET: 'getAllApps']
                }
                "/$id/approve"(controller: 'app') {
                    action = [POST: 'approveRequest']
                }
            }

            group "/posts", {
                "/"(controller: 'post') {
                    action = [GET: 'posts']
                }
                "/count"(controller: 'post') {
                    action = [GET: 'count']
                }
                "/like"(controller: 'post') {
                    action = [POST: 'like']
                }
                "/$id"(controller: 'post') {
                    action = [GET: 'post']
                }
            }
        }
        "/"(uri: '/index.html')
        "500"(view: '/error')
        "404"(view: '/notFound')
        "401"(view: '/unauthorized')
    }
}
