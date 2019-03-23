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
                    action = [GET: 'getClazz']
                }
                "/$id/submissions"(controller: 'class') {
                    action = [GET: 'getSubmissions', POST: 'submitSolution']
                }
                "/$id/reporte"(controller: 'class') {
                    action = [GET: 'getReport']
                }
                "/material"(controller: 'class') {
                    action = [POST: 'getBoleto']
                }
                "/$classId/submissions/$id"(controller: 'class') {
                    action = [GET: 'getSubmission', DELETE: 'deleteSubmission']
                }
                "/$id/quiz/create"(controller: 'quiz') {
                    action = [POST: 'createQuiz']
                }
                "/$classId/quiz/$quizId"(controller: 'quiz') {
                    action = [GET: 'getQuiz']
                }
                "/$classId/quiz/$quizId/submit"(controller: 'quiz') {
                    action = [POST: 'submit']
                }
                "/$classId/quiz/$quizId/answers"(controller: 'quiz') {
                    action = [GET: 'getAnswers']
                }
                "/$classId/quiz/$quizId/answers/evaluate"(controller: 'quiz') {
                    action = [POST: 'evaluateAnswer']
                }
                "/$id/activity/create"(controller: 'class') {
                    action = [POST: 'createActivity']
                }
            }

            group "/quiz", {
                "/"(controller: 'quiz') {
                    action = [GET: 'index']
                }
                "/$id"(controller: 'quiz') {
                    action = [GET: 'getProblem']
                }
                "/create"(controller: 'quiz') {
                    action = [POST: 'createProblem']
                }
            }

            group "/activity", {
                "/$id"(controller: 'class') {
                    action = [GET: 'getActivity']
                }
                "/$id/submissions"(controller: 'class') {
                    action = [GET: 'getSubmissions', POST: 'addSubmissions']
                }
                "/$id/allSubmissions"(controller: 'class') {
                    action = [GET: 'getAllSubmissions']
                }
            }

            group "/problem" {
                "/"(controller: 'problem') {
                    action = [GET: 'index']
                }
                "/$id/create"(controller: 'problem') {
                    action = [POST: 'createProblem']
                }
            }

            group "/authority", {
                "/"(controller: 'authority') {
                    action = [GET: 'index']
                }
                "/all"(controller: 'authority') {
                    action = [GET: 'getAll']
                }
                "/$id"(controller: 'authority') {
                    action = [GET: 'getAuthoritiesFromUser', POST: 'setAuthorities']
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
