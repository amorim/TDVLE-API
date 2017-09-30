package com.tdnsecuredrest

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

	private static final long serialVersionUID = 1

	transient springSecurityService

//	String name
	String username
	String password
//	String email
//	Date bornDate
//	String siewebRegistration
//	String avatar

	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	Set<Authority> getAuthorities() {
		UserAuthority.findAllByUser(this)*.authority
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService.encodePassword(password)
	}

	static transients = ['springSecurityService']

	static constraints = {
//		name blank: false
		username blank: false, unique: true
		password blank: false, password: true
//		email blank: false, unique: true
		// bornDate nullable: false
		// siewebRegistration blank: true
		// avatar blank: true
	}

	static mapping = {
		table '`User`'
		password column: '`password`'
	}
}
