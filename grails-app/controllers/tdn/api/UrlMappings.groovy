package tdn.api

class UrlMappings {

    static excludes = ["/index.html", "/*.js", "/*.css", "/assets", "/*.ico"]

    static mappings = {

        group "/api", {

            group "/user", {
                '/'(controller: 'user') {
                    action = [GET: 'show', PUT: 'update']
                }

                '/post'(controller: 'post') {
                    action = [POST: 'save', GET: 'index']
                }

                '/followers'(controller: 'followers') {
                    action = [GET: 'index']
                }
            }

            "/post/$id"(controller: 'post') {
                action = [GET: 'post']
            }

            "/profile/$id"(controller: 'user') {
                action = [GET: 'user']
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
                "/$id/follower/count"(controller: 'followers') {
                    action = [GET: 'followerCount']
                }
                "/$id/following"(controller: 'followers') {
                    action = [GET: 'following']
                }
                "/$id/following/count"(controller: 'followers') {
                    action = [GET: 'followingCount']
                }
                "/$id/posts"(controller: 'post') {
                    action = [GET: 'index']
                }
                "/$id"(controller: 'user') {
                    action = [DELETE: 'delete']
                }
            }

            group "/apps", {
                "/"(controller: 'app') {
                    action = [GET: 'getAllApps', POST: 'requestIntegration', DELETE: 'deleteApp']
                }
                "/count"(controller: 'app') {
                    action = [GET: 'count']
                }
                "/$id"(controller: 'app') {
                    action = [GET: 'getApp']
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

            group "/apps", {
                "/"(controller: 'app') {
                    action = [GET: 'getAllApps', POST: 'requestIntegration']
                }
                "/all"(controller: 'app') {
                    action = [GET: 'getAllApps']
                }
                "/$id/approve"(controller: 'app') {
                    action = [POST: 'approveRequest']
                }
                "/$id/delete"(controller: 'app') {
                    action = [DELETE: 'deleteApp']
                }
                "/count"(controller: 'app') {
                    action = [GET: 'count']
                }

            }

            group "/class", {
                "/"(controller: 'class') {
                    action = [GET: 'getAllClasses']
                }
                "/count"(controller: 'class') {
                    action = [GET: 'classCount']
                }
                "/create"(controller: 'class') {
                    action = [POST: 'createClass']
                }
                "/enter"(controller: 'class') {
                    action = [POST: 'enterClass']
                }
                "/$id/delete"(controller: 'class') {
                    action = [DELETE: 'removeClass']
                }
                "/$id"(controller: 'class') {
                    action = [GET: 'getClass']
                }
                "/$id/submissions"(controller: 'class') {
                    action = [GET: 'getSubmissions', POST: 'submitSolution']
                }
                "/$classId/submissions/$id"(controller: 'class') {
                    action = [GET: 'getSubmission', DELETE: 'deleteSubmission']
                }
            }

            group "/authority", {
                "/"(controller: 'authority') {
                    action = [GET: 'index']
                }
                "/request"(controller: 'authority') {
                    action = [POST: 'requestAuthorities']
                }
                // I won't define a count for now...
            }
        }
        "/**"(uri: '/index.html')

        "500"(view: '/error')
        "404"(view: '/notFound')
        "401"(view: '/unauthorized')
    }
}
