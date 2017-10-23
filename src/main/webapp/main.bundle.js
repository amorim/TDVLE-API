webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"everything\">\r\n  <mat-toolbar color=\"primary\">\r\n    <button mat-icon-button (click)=\"toggleSidenav()\">\r\n      <mat-icon class=\"mat-24\" aria-label=\"Menu\">menu</mat-icon>\r\n    </button>\r\n    <span class=\"space-left\">The Dank Network</span>\r\n    <span class=\"fill-space\"></span>\r\n\r\n\r\n    <button mat-icon-button [matMenuTriggerFor]=\"notifications\" (click)=\"readNotifications()\">\r\n      <mat-icon *ngIf=\"this.notificationCount == 0\" class=\"mat-24\" matTooltip=\"Notifications\"\r\n                aria-label=\"Notifications\">notifications\r\n      </mat-icon>\r\n      <div *ngIf=\"this.notificationCount > 0\" class=\"notificationCircle\">{{this.notificationCount}}</div>\r\n      <mat-menu style=\"width: 80vw; max-width: 400px;\" #notifications=\"matMenu\">\r\n        <div class=\"notificationHolder\">\r\n\r\n          <div class=\"noNotifications\" *ngIf=\"notificationsList.length === 0\">\r\n            <div class=\"noNotifText\">No notifications here, senpai</div>\r\n          </div>\r\n          <mat-card *ngFor=\"let notification of notificationsList; let i = index\" class=\"notificationCard\">\r\n            <mat-card-title class=\"notificationCardTitle\">{{notification.fromUser.name}}</mat-card-title>\r\n            <div class=\"notificationCardTitle\" style=\"float: right;\">\r\n              <button style=\"line-height: 28px; height: auto; width: 26px;\" (click)=\"deleteNotif(i, $event)\" mat-icon-button color=\"warn\">\r\n                <mat-icon aria-label=\"Delete notification\">clear</mat-icon>\r\n              </button>\r\n            </div>\r\n            <mat-card-subtitle>{{notification.message}}</mat-card-subtitle>\r\n            <mat-card-subtitle>{{notification.date | timeAgo}}</mat-card-subtitle>\r\n          </mat-card>\r\n        </div>\r\n      </mat-menu>\r\n    </button>\r\n    <ngx-avatar style=\"margin-left: 5px;\" size=\"40\" textSizeRatio=\"2\" name=\"Lucas\" initialsSize=\"1\" src=\"\"></ngx-avatar>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"content-container\">\r\n    <mat-sidenav #sidenav class=\"sidenav-menu\">\r\n      <mat-nav-list>\r\n        <a *ngFor=\"let url of urls\" mat-list-item (click)=\"disposeSidenav()\" [routerLink]=\"[url.path]\">\r\n          <mat-icon>{{url.icon}}</mat-icon>\r\n          <span style=\"width: 20px;\"></span>{{url.desc}}\r\n          <span style=\"width: 20px;\"></span>\r\n        </a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <div class=\"routerOutlet\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".everything {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n\n.routerOutlet {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.notificationCircle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #f00;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 200px;\n  color: white; }\n\n.notificationCard {\n  margin: 20px; }\n\n::ng-deep .mat-menu-panel {\n  width: 80vw !important;\n  max-width: 400px !important; }\n\n::ng-deep .mat-menu-content {\n  padding-bottom: 0 !important; }\n\n.notificationCardTitle {\n  display: inline-block; }\n\n.noNotifications {\n  height: 50vh;\n  max-height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: url(\"https://i.imgur.com/TrKchWC.png\") center bottom;\n  background-size: 70%;\n  background-repeat: no-repeat; }\n\n.noNotifText {\n  font-family: Roboto, sans-serif;\n  font-size: 20px;\n  height: 30%;\n  color: #757575;\n  text-align: center;\n  position: relative;\n  top: 30%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.space-left {\n  margin-left: 15px; }\n\n.content-container {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.notificationsList = [];
        this.notificationCount = 0;
        this.urls = [{ path: 'welcome', icon: 'home', desc: 'Home' },
            { path: 'user', icon: 'person', desc: 'Profile' },
            { path: 'people', icon: 'people', desc: 'People' },
            { path: 'post', icon: 'forum', desc: 'Posts' },
            { path: 'apps', icon: 'apps', desc: 'Apps' }];
        setInterval(function () { _this.getNotifications(); }, 30000);
    }
    AppComponent.prototype.getNotifications = function () {
        var _this = this;
        this.userService.getNotificationsCount().subscribe(function (notificationCount) {
            console.log('There are:', notificationCount['notificationCount'], 'notifications');
            _this.notificationCount = notificationCount['notificationCount'];
        });
        this.userService.getNotifications().subscribe(function (notifications) {
            console.log('Notifications:', notifications);
            _this.notificationsList = notifications;
        });
    };
    AppComponent.prototype.disposeSidenav = function () {
        setTimeout(this.toggleSidenav.bind(this), 100);
    };
    AppComponent.prototype.readNotifications = function () {
        this.notificationCount = 0;
        this.userService.setReadNotifications().subscribe();
    };
    AppComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    AppComponent.prototype.deleteNotif = function (i, $event) {
        var notif = this.notificationsList[i];
        this.userService.deleteNotification(notif.id).subscribe();
        this.notificationsList.splice(i, 1);
        $event.stopPropagation();
        return false;
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_avatar__ = __webpack_require__("../../../../ngx-avatar/ngx-avatar.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__people_find_people_find_people_component__ = __webpack_require__("../../../../../src/app/people/find-people/find-people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__people_followers_followers_component__ = __webpack_require__("../../../../../src/app/people/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__people_following_following_component__ = __webpack_require__("../../../../../src/app/people/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__post_post_module__ = __webpack_require__("../../../../../src/app/post/post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__apps_apps_component__ = __webpack_require__("../../../../../src/app/apps/apps.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_12__post_post_component__["a" /* PostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_18__people_people_component__["a" /* PeopleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', redirectTo: 'find', pathMatch: 'full' },
            { path: 'find', component: __WEBPACK_IMPORTED_MODULE_19__people_find_people_find_people_component__["a" /* FindPeopleComponent */] },
            { path: 'followers', component: __WEBPACK_IMPORTED_MODULE_20__people_followers_followers_component__["a" /* FollowersComponent */] },
            { path: 'following', component: __WEBPACK_IMPORTED_MODULE_21__people_following_following_component__["a" /* FollowingComponent */] }
        ] },
    { path: 'apps', component: __WEBPACK_IMPORTED_MODULE_23__apps_apps_component__["a" /* AppsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__["TimeAgoPipe"],
            __WEBPACK_IMPORTED_MODULE_18__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_19__people_find_people_find_people_component__["a" /* FindPeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__people_followers_followers_component__["a" /* FollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__people_following_following_component__["a" /* FollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__apps_apps_component__["a" /* AppsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_14__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_22__post_post_module__["a" /* PostModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_avatar__["AvatarModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/apps/apps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apps/apps.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/apps/apps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsComponent = (function () {
    function AppsComponent() {
    }
    AppsComponent.prototype.ngOnInit = function () {
    };
    return AppsComponent;
}());
AppsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-apps',
        template: __webpack_require__("../../../../../src/app/apps/apps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/apps/apps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppsComponent);

//# sourceMappingURL=apps.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.userService.getAuthenticatedUser().subscribe(function (data) {
                observer.next(true);
                observer.complete();
            }, function (error) {
                if (error.status === 401) {
                    _this.authService.clearCookies();
                    _this.router.navigate(['/login']);
                }
                observer.error(false);
                observer.complete();
            });
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.http.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthHttp = (function () {
    function AuthHttp(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    AuthHttp.prototype.request = function (url, options) {
        return this.http.request(url, this.setAuthHeader(options));
    };
    AuthHttp.prototype.get = function (url, options) {
        return this.http.get(url, this.setAuthHeader(options));
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.http.post(url, body, this.setAuthHeader(options));
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.http.put(url, body, this.setAuthHeader(options));
    };
    AuthHttp.prototype.del = function (url, options) {
        return this.http.delete(url, this.setAuthHeader(options));
    };
    AuthHttp.prototype.setAuthHeader = function (options) {
        options = options || {};
        options.headers = options.headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        options.headers.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
        return options;
    };
    return AuthHttp;
}());
AuthHttp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthHttp);

var _a, _b;
//# sourceMappingURL=auth.http.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_http__ = __webpack_require__("../../../../../src/app/auth/auth.http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_5__auth_http__["a" /* AuthHttp */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    AuthService.prototype.login = function (user, callback) {
        var _this = this;
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["a" /* Constants */].url + '/login', user)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.cookieService.set('access-token', data['access_token']);
            _this.cookieService.set('refresh-token', data['refresh_token']);
            callback(true, 0);
        }, function (error) {
            callback(false, error.status);
            console.log('login error');
        });
    };
    AuthService.prototype.logout = function () {
        this.clearCookies();
    };
    AuthService.prototype.clearCookies = function () {
        this.cookieService.delete('access-token');
        this.cookieService.delete('refresh-token');
    };
    AuthService.prototype.getAccessToken = function () {
        return this.cookieService.get('access-token');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n:host >>> .mat-snack-bar-container {\r\n  margin-left: -1000px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div>\r\n  <mat-card class=\"login-form\">\r\n    <h3>Sign In</h3>\r\n    <form>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"User Name\" [(ngModel)]=\"this.userLogin.username\" name=\"inputUserName\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"this.userLogin.password\" name=\"inputPassword\">\r\n      </mat-form-field>\r\n      <button mat-raised-button (click)=\"login()\" (onkeypress)=\"onKeyPress($event)\" color=\"accent\">Login</button>\r\n      <a routerLink=\"/register\">Register</a>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_http__ = __webpack_require__("../../../../../src/app/auth/auth.http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(authHttp, authService, router, snackBar) {
        this.authHttp = authHttp;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.title = 'login';
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]();
        if (this.authService.getAccessToken()) {
            this.router.navigate(['/welcome']);
        }
    }
    LoginComponent.prototype.login = function () {
        this.authService.login(this.userLogin, this.callback.bind(this));
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.callback = function (logged, code) {
        console.log(logged);
        console.log(code);
        if (code === 0) {
            this.snackBar.open('Logged In', 'Dismiss', { duration: 2000 });
        }
        else if (code === 401) {
            this.snackBar.open('Wrong password or User not found', 'Dismiss', { duration: 2000 });
        }
        this.router.navigate(['/welcome']);
    };
    LoginComponent.prototype.onKeyPress = function ($event) {
        if ($event.keyCode === 13) {
            this.login();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_http__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_http__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatSnackBar */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/like.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Like; });
var Like = (function () {
    function Like() {
    }
    return Like;
}());

//# sourceMappingURL=like.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=post.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * Created by lucas on 25/09/2017.
 */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/people/find-people/find-people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users {\r\n  height: auto;\r\n  overflow: hidden;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  /*justify-content: center;*/\r\n}\r\n\r\n.usercard {\r\n  margin: 0.5%;\r\n  width: 20%;\r\n  max-width: 200px;\r\n  min-width: 150px;\r\n  height: 220px;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  float: left;\r\n}\r\n\r\n.avatar {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.username {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n}\r\n\r\n.action {\r\n  text-align: center;\r\n  position: absolute;\r\n  display: block;\r\n  bottom: 10px;\r\n  left: 0;\r\n  right: 0;\r\n\r\n}\r\n\r\n.uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 100%;\r\n  bottom: 0;\r\n  position: fixed;\r\n  padding: 0 0;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/find-people/find-people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n  <mat-card *ngFor=\"let user of this.users\" class=\"usercard\">\r\n    <div class=\"avatar\">\r\n      <ngx-avatar name={{user.name}} initialsSize=\"1\" src=\"\" size=\"100\">\r\n      </ngx-avatar>\r\n    </div>\r\n    <div class=\"username\">{{user.name}}</div>\r\n    <div class=\"action\">\r\n      <button mat-raised-button (click)=\"this.toggleFollow(user)\" color=\"accent\">{{this.getFollowingText(user)}}</button>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"mat-paginator\">\r\n  <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" [pageIndex]=\"pageIndex\" (page)=\"pageEvent = $event; this.alterPage()\"></mat-paginator>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/people/find-people/find-people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindPeopleComponent = (function () {
    function FindPeopleComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.length = 14;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* PageEvent */]();
        this.users = [];
        this.userService.getUsersPage(this.pageSize, this.pageIndex * this.pageSize).subscribe(function (users) {
            _this.users = users;
            _this.userService.getUsersCount().subscribe(function (userCount) {
                _this.length = userCount['userCount'];
                _this.pageEvent.length = _this.length;
                console.log('There are:', userCount['userCount'], 'users');
            });
            _this.pageEvent.pageSize = _this.pageSize;
            _this.pageEvent.pageIndex = _this.pageIndex;
        });
    }
    FindPeopleComponent.prototype.ngOnInit = function () {
    };
    FindPeopleComponent.prototype.alterPage = function () {
        var _this = this;
        this.userService.getUsersPage(this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize).subscribe(function (users) {
            _this.users = users;
        });
    };
    FindPeopleComponent.prototype.isFollowing = function (user) {
        return user.isFollowing;
    };
    FindPeopleComponent.prototype.getFollowingText = function (user) {
        if (this.isFollowing(user)) {
            return ('Unfollow');
        }
        else {
            return ('Follow');
        }
    };
    FindPeopleComponent.prototype.toggleFollow = function (user) {
        if (this.isFollowing(user)) {
            this.userService.deleteFollow(user.id);
            user.isFollowing = false;
        }
        else {
            this.userService.setFollow(user.id);
            user.isFollowing = true;
        }
    };
    return FindPeopleComponent;
}());
FindPeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-people',
        template: __webpack_require__("../../../../../src/app/people/find-people/find-people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/find-people/find-people.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], FindPeopleComponent);

var _a;
//# sourceMappingURL=find-people.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/followers/followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users {\r\n  height: auto;\r\n  overflow: hidden;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  /*justify-content: center;*/\r\n}\r\n\r\n.usercard {\r\n  margin: 0.5%;\r\n  width: 20%;\r\n  max-width: 200px;\r\n  min-width: 150px;\r\n  height: 220px;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  float: left;\r\n}\r\n\r\n.avatar {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.username {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n}\r\n\r\n.action {\r\n  text-align: center;\r\n  position: absolute;\r\n  display: block;\r\n  bottom: 10px;\r\n  left: 0;\r\n  right: 0;\r\n\r\n}\r\n\r\n.uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 100%;\r\n  padding: 0 0;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/followers/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n  <mat-card *ngFor=\"let user of this.followers\" class=\"usercard\">\r\n    <div class=\"avatar\">\r\n      <ngx-avatar name={{user.name}} initialsSize=\"1\" src=\"\" size=\"100\">\r\n      </ngx-avatar>\r\n    </div>\r\n    <div class=\"username\">{{user.name}}</div>\r\n    <div class=\"action\">\r\n      <button mat-raised-button (click)=\"this.toggleFollow(user)\" color=\"accent\">{{this.getFollowingText(user)}}</button>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"mat-paginator\">\r\n  <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" [pageIndex]=\"pageIndex\" (page)=\"pageEvent = $event; this.alterPage()\"></mat-paginator>\r\n  <div *ngIf=\"pageEvent\">\r\n    <h5>Page Change Event Properties</h5>\r\n    <div>List length: {{pageEvent.length}}</div>\r\n    <div>Page size: {{pageEvent.pageSize}}</div>\r\n    <div>Page index: {{pageEvent.pageIndex}}</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/people/followers/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowersComponent = (function () {
    function FollowersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.length = 14;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* PageEvent */];
        this.followers = [];
        this.userService.getFollowers(this.pageSize, this.pageIndex * this.pageSize).subscribe(function (users) {
            _this.followers = users;
            _this.userService.getFollowerCount().subscribe(function (userCount) {
                _this.length = userCount['followerCount'];
                _this.pageEvent.length = _this.length;
            });
            _this.pageEvent.pageSize = _this.pageSize;
            _this.pageEvent.pageIndex = _this.pageIndex;
        });
    }
    FollowersComponent.prototype.ngOnInit = function () {
    };
    FollowersComponent.prototype.alterPage = function () {
        var _this = this;
        this.userService.getFollowers(this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize).subscribe(function (users) {
            _this.followers = users;
        });
    };
    FollowersComponent.prototype.isFollowing = function (user) {
        return user.isFollowing;
    };
    FollowersComponent.prototype.getFollowingText = function (user) {
        if (this.isFollowing(user)) {
            return ('Unfollow');
        }
        else {
            return ('Follow');
        }
    };
    FollowersComponent.prototype.toggleFollow = function (user) {
        if (this.isFollowing(user)) {
            this.userService.deleteFollow(user.id);
            user.isFollowing = false;
        }
        else {
            this.userService.setFollow(user.id);
            user.isFollowing = true;
        }
    };
    return FollowersComponent;
}());
FollowersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-followers',
        template: __webpack_require__("../../../../../src/app/people/followers/followers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/followers/followers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], FollowersComponent);

var _a;
//# sourceMappingURL=followers.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/following/following.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/following/following.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  following works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/people/following/following.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowingComponent = (function () {
    function FollowingComponent() {
    }
    FollowingComponent.prototype.ngOnInit = function () {
    };
    return FollowingComponent;
}());
FollowingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-following',
        template: __webpack_require__("../../../../../src/app/people/following/following.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/following/following.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FollowingComponent);

//# sourceMappingURL=following.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n  white-space: nowrap;\r\n}\r\nnav a {\r\n  width: calc(100%/3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\r\n  <a mat-tab-link\r\n     [routerLink]=\"['find']\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\">\r\n    FIND PEOPLE\r\n  </a>\r\n  <a mat-tab-link\r\n     [routerLink]=\"['followers']\"\r\n     routerLinkActive #rla2=\"routerLinkActive\"\r\n     [active]=\"rla2.isActive\">\r\n    FOLLOWERS\r\n  </a>\r\n  <a mat-tab-link\r\n     [routerLink]=\"['following']\"\r\n     routerLinkActive #rla3=\"routerLinkActive\"\r\n     [active]=\"rla3.isActive\">\r\n    FOLLOWING\r\n  </a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/people.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeopleComponent);

//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.posts {\r\n  height: auto;\r\n  overflow: hidden;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.postcard {\r\n  margin: 0.5%;\r\n  width: 20%;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  float: left;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png');\r\n  background-size: cover;\r\n}\r\n\r\n.like {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.bottom {\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-card class=\"post-form\">\r\n    <h1>Post</h1>\r\n    <form>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput required placeholder=\"Description\" [(ngModel)]=\"this.postObj.description\" name=\"inputDescription\" #inputDescription=\"ngModel\"></textarea>\r\n      </mat-form-field>\r\n      <button mat-raised-button [disabled]=\"inputDescription.invalid\" (click)=\"post()\" (onkeypress)=\"onKeyPress($event)\" color=\"accent\">Post</button>\r\n      <a routerLink=\"/welcome\">Welcome</a>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"posts\">\r\n  <mat-card *ngFor=\"let post of posts\" class=\"postcard\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>{{post.user.name}}</mat-card-title>\r\n      <mat-card-subtitle>{{post.date | timeAgo }}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>{{post.description}}</mat-card-content>\r\n    <div class=\"like\">\r\n      <h3>{{post.likeCount}}</h3>\r\n      <button mat-raised-button (click)=\"this.toggleLike(post)\">{{this.getLikeText(post)}}</button>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"mat-paginator\">\r\n  <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" [pageIndex]=\"pageIndex\" (page)=\"pageEvent = $event; this.alterPage()\"></mat-paginator>\r\n  <div *ngIf=\"pageEvent\">\r\n    <h5>Page Change Event Properties</h5>\r\n    <div>List length: {{pageEvent.length}}</div>\r\n    <div>Page size: {{pageEvent.pageSize}}</div>\r\n    <div>Page index: {{pageEvent.pageIndex}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_post_model__ = __webpack_require__("../../../../../src/app/model/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/app/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_like_model__ = __webpack_require__("../../../../../src/app/model/like.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = (function () {
    function PostComponent(postService, userService) {
        var _this = this;
        this.postService = postService;
        this.userService = userService;
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* PageEvent */];
        this.authenticatedUser = new __WEBPACK_IMPORTED_MODULE_4__model_user_model__["a" /* User */]();
        this.postObj = new __WEBPACK_IMPORTED_MODULE_1__model_post_model__["a" /* Post */]();
        this.posts = [];
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.postService.getPostCount().subscribe(function (postCount) {
            _this.length = postCount['postCount'];
            console.log('There are:', _this.length, 'posts');
        });
        this.postService.getPosts(this.pageSize, this.pageIndex * this.pageSize).subscribe(function (posts) {
            console.log('Posts:', posts);
            _this.posts = posts;
        });
    }
    PostComponent.prototype.post = function () {
        var _this = this;
        this.postService.setPost(this.postObj).subscribe(function (newPost) {
            console.log('NewPost', newPost);
            _this.posts.unshift(newPost);
            _this.length++;
        });
    };
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.alterPage = function () {
        var _this = this;
        console.log('Getting new page');
        this.postService.getPosts(this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize).subscribe(function (posts) {
            console.log('Posts:', posts);
            _this.posts = posts;
        });
    };
    PostComponent.prototype.toggleLike = function (post) {
        var _this = this;
        var like = new __WEBPACK_IMPORTED_MODULE_6__model_like_model__["a" /* Like */]();
        like.post = post;
        console.log(like);
        this.postService.setLike(like).subscribe(function (newPost) {
            var idx = _this.posts.indexOf(post, 0);
            _this.posts[idx] = newPost;
            console.log('Liked:', _this.posts[idx]);
        });
    };
    PostComponent.prototype.getLikeText = function (post) {
        if (post.hasLiked) {
            return 'Dislike';
        }
        else {
            return 'Like';
        }
    };
    PostComponent.prototype.onKeyPress = function ($event) {
        if ($event.keyCode === 13) {
            this.post();
        }
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], PostComponent);

var _a, _b;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/app/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_material_module__["a" /* MaterialModule */]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]]
    })
], PostModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__ = __webpack_require__("../../../../../src/app/auth/auth.http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPosts = function (max, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/posts?max=' + max + '&offset=' + offset).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/posts/' + id).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/posts/count').map(function (res) { return res.json(); });
    };
    PostService.prototype.setPost = function (postObj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/user/post', postObj).map(function (res) { return res.json(); });
    };
    PostService.prototype.setLike = function (like) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/posts/like', like).map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div>\r\n  <mat-card class=\"register-form\">\r\n    <h3>Register</h3>\r\n    <form>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput required placeholder=\"Name\" [(ngModel)]=\"this.userRegister.name\" name=\"inputName\" #inputName=\"ngModel\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput required placeholder=\"User Name\" [(ngModel)]=\"this.userRegister.username\" name=\"inputUserName\" #inputUserName=\"ngModel\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput required type=\"password\" placeholder=\"Password\" [(ngModel)]=\"this.userRegister.password\" name=\"inputPassword\" #inputPassword=\"ngModel\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput required [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"this.userRegister.bornDate\" name=\"inputBornDate\" #inputBornDate=\"ngModel\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput required type=\"email\" placeholder=\"Email\" [(ngModel)]=\"this.userRegister.email\" name=\"inputEmail\" #inputEmail=\"ngModel\">\r\n      </mat-form-field>\r\n      <button mat-raised-button [disabled]=\"inputName.invalid || inputUserName.invalid || inputPassword.invalid || inputBornDate.invalid || inputEmail.invalid\" (click)=\"register()\" (onkeypress)=\"onKeyPress($event)\" color=\"accent\">Register</button>\r\n      <a routerLink=\"/login\">Login</a>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.title = 'register';
        this.userRegister = new __WEBPACK_IMPORTED_MODULE_1__model_user_model__["a" /* User */]();
    }
    RegisterComponent.prototype.register = function () {
        console.log(this.userRegister);
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__shared_constants__["a" /* Constants */].url + '/register', this.userRegister)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onKeyPress = function ($event) {
        if ($event.keyCode === 13) {
            this.register();
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSnackBar */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.url = 'https://the-dank-network.herokuapp.com/api';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTabsModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTabsModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png');\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"post-form\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{user.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{user.email}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content></mat-card-content>\r\n  <a routerLink=\"/welcome\">Welcome</a>\r\n  <router-outlet></router-outlet>\r\n</mat-card>\r\n\r\n<h1>Followers</h1>\r\n<mat-card *ngFor=\"let follower of followers\" class=\"post-form\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{follower.name}}</mat-card-title>\r\n  </mat-card-header>\r\n</mat-card>\r\n\r\n<h1>Following</h1>\r\n<mat-card *ngFor=\"let following of following\" class=\"post-form\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{following.name}}</mat-card-title>\r\n  </mat-card-header>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__ = __webpack_require__("../../../../../src/app/auth/auth.http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_model__ = __webpack_require__("../../../../../src/app/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(http, userService) {
        var _this = this;
        this.http = http;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user_model__["a" /* User */]();
        this.followers = [];
        this.following = [];
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
            _this.userService.getFollowers(0, 100).subscribe(function (followers) {
                console.log(followers);
                _this.followers = followers;
            });
            _this.userService.getFollowing(_this.user.id).subscribe(function (following) {
                console.log(following);
                _this.following = following;
            });
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_material_module__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__ = __webpack_require__("../../../../../src/app/auth/auth.http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getNotifications = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/notifications').map(function (res) { return res.json(); });
    };
    UserService.prototype.getNotificationsCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/notifications/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.setReadNotifications = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/notifications/read', null).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteNotification = function (id) {
        return this.http.del(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/notifications/' + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/').map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersPage = function (max, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users?max=' + max + '&offset=' + offset).map(function (res) { return res.json(); });
    };
    UserService.prototype.getAuthenticatedUser = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/user').map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowers = function (max, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/user/followers?max=' + max + '&offset=' + offset).map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowerCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/follower/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowing = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/' + id + '/following').map(function (res) { return res.json(); });
    };
    UserService.prototype.setFollow = function (id) {
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/' + id + '/followers', null).subscribe(function (data) {
            console.log(data);
        });
    };
    UserService.prototype.deleteFollow = function (id) {
        this.http.del(__WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* Constants */].url + '/users/' + id + '/followers').subscribe(function (data) {
            console.log(data);
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_http__["a" /* AuthHttp */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div>\r\n  <mat-card class=\"welcome-form\">\r\n    <h1>Welcome!</h1>\r\n    <button mat-raised-button (click)=\"logout()\" color=\"accent\">Logout</button>\r\n    <a routerLink=\"/post\">Post</a>\r\n  </mat-card>\r\n</div>\r\n\r\n<h1>Users</h1>\r\n<mat-card *ngFor=\"let user of this.users\" class=\"welcome-form\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{user.name}}</mat-card-title>\r\n    <button mat-raised-button (click)=\"this.toggleFollow(user)\" color=\"accent\">{{this.getFollowingText(user)}}</button>\r\n  </mat-card-header>\r\n</mat-card>\r\n\r\n<mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" [pageIndex]=\"pageIndex\" (page)=\"pageEvent = $event; this.alterPage()\"></mat-paginator>\r\n\r\n<!--<div *ngIf=\"pageEvent\">-->\r\n  <!--<h5>Page Change Event Properties</h5>-->\r\n  <!--<div>List length: {{pageEvent.length}}</div>-->\r\n  <!--<div>Page size: {{pageEvent.pageSize}}</div>-->\r\n  <!--<div>Page index: {{pageEvent.pageIndex}}</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeComponent = (function () {
    function WelcomeComponent(authService, router, snackBar, userService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.userService = userService;
        this.length = 14;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* PageEvent */];
        this.users = [];
        this.following = [];
        this.userService.getUsersCount().subscribe(function (quantity) {
            _this.length = quantity['userCount'];
            console.log('There are:', _this.length, ' users');
        });
        this.userService.getUsersPage(this.pageSize, this.pageIndex * this.pageSize).subscribe(function (users) {
            _this.users = users;
        });
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.userService.getFollowing(user.id).subscribe(function (following) {
                _this.following = following;
            });
        });
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.alterPage = function () {
        var _this = this;
        console.log('Getting new page');
        this.userService.getUsersPage(this.pageEvent.pageSize, this.pageEvent.pageIndex * this.pageEvent.pageSize).subscribe(function (users) {
            console.log(users);
            _this.users = users;
            _this.userService.getAuthenticatedUser().subscribe(function (user) {
                _this.userService.getFollowing(user.id).subscribe(function (following) {
                    _this.following = following;
                });
            });
        });
    };
    WelcomeComponent.prototype.getPosition = function (user) {
        return (this.following.findIndex(function (currUser) {
            return (user.id === currUser.id);
        }));
    };
    WelcomeComponent.prototype.isFollowing = function (user) {
        return (this.getPosition(user) > -1);
    };
    WelcomeComponent.prototype.getFollowingText = function (user) {
        if (this.isFollowing(user)) {
            return ('Unfollow');
        }
        else {
            return ('Follow');
        }
    };
    WelcomeComponent.prototype.logout = function () {
        this.authService.logout();
        this.snackBar.open('Logged Out', 'Dismiss', { duration: 2000 });
        this.router.navigate(['/login']);
    };
    WelcomeComponent.prototype.toggleFollow = function (user) {
        if (this.isFollowing(user)) {
            this.following.splice(this.getPosition(user), 1);
            this.userService.deleteFollow(user.id);
        }
        else {
            this.following.push(user);
            this.userService.setFollow(user.id);
        }
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], WelcomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map