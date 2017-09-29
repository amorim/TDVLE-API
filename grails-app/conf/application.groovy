// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'com.mysecurerest.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'com.mysecurerest.UserAuthority'
grails.plugin.springsecurity.authority.className = 'com.mysecurerest.Authority'
grails.plugin.springsecurity.securityConfigType = "InterceptUrlMap"
grails.plugin.springsecurity.interceptUrlMap = [
		[pattern: '/',               access: ['permitAll']],
		[pattern: '/api/home/**',    access: ['ROLE_USER']],
		[pattern: '/error',          access: ['permitAll']],
		[pattern: '/index',          access: ['permitAll']],
		[pattern: '/index.gsp',      access: ['permitAll']],
		[pattern: '/shutdown',       access: ['permitAll']],
		[pattern: '/assets/**',      access: ['permitAll']],
		[pattern: '/**/js/**',       access: ['permitAll']],
		[pattern: '/**/css/**',      access: ['permitAll']],
		[pattern: '/**/images/**',   access: ['permitAll']],
		[pattern: '/**/favicon.ico', access: ['permitAll']],
		[pattern:  '/login/**',      access:['IS_AUTHENTICATED_ANONYMOUSLY']],
		[pattern: '/**',             access: ['IS_AUTHENTICATED_FULLY']],
		[pattern: '/api/**',         access: ['IS_AUTHENTICATED_FULLY']]
]

grails.plugin.springsecurity.filterChain.chainMap = [
		//Stateless chain
		[
				pattern: '/api/**',
				filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
		],

		//Traditional chain
		[
				pattern: '/**',
				filters: 'JOINED_FILTERS,-restTokenValidationFilter,-restExceptionTranslationFilter'
		]
]

//rest configuration
grails.plugin.springsecurity.rest.token.storage.useGorm = true // since using gorm for token storage
grails.plugin.springsecurity.rest.token.generation.useSecureRandom = true
grails.plugin.springsecurity.rest.login.active =true
grails.plugin.springsecurity.rest.token.validation.headerName = 'X-Auth-Token'
grails.plugin.springsecurity.rest.login.useJsonCredentials = true // can use json a request parameter
grails.plugin.springsecurity.rest.login.usernamePropertyName = 'username' // field of username parameter
grails.plugin.springsecurity.rest.login.passwordPropertyName = 'password' // field of pasword parameter
grails.plugin.springsecurity.rest.login.useRequestParamsCredential = true

grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName ='com.example.AuthenticationToken' // token class name with package
grails.plugin.springsecurity.rest.token.storage.gorm.tokenValuePropertyName = 'secretToken' // field name for token storage
grails.plugin.springsecurity.rest.token.storage.gorm.usernamePropertyName = 'loginName'

grails.plugin.springsecurity.rest.logout.endpointUrl = '/api/logout'
grails.plugin.springsecurity.rest.login.endpointUrl = '/api/login'
grails.plugin.springsecurity.rest.login.failureStatusCode = 401
//token validate
grails.plugin.springsecurity.rest.token.validation.useBearerToken = true
grails.plugin.springsecurity.rest.token.validation.active=true
grails.plugin.springsecurity.rest.token.validation.endpointUrl='/api/validate'
//end of rest configuration

grails.gorm.default.mapping = {
    autowire true
}

