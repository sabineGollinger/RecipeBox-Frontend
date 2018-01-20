"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserSearchComponent = (function () {
    function UserSearchComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.users = [];
        this.showAll();
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        this.loginUser = this.authService.loginUser;
        this.loginUserRole = this.authService.loginUserRole;
    };
    UserSearchComponent.prototype.search = function () {
        var _this = this;
        this.userService
            .findByFirstnameAndLastname(this.firstname, this.lastname).subscribe(function (users) {
            _this.users = users['_embedded']['users'];
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    UserSearchComponent.prototype.showAll = function () {
        var _this = this;
        this.userService
            .findAllUsers()
            .subscribe(function (users) {
            _this.users = users['_embedded']['users'];
        }, function (err) {
            console.error('Fehler beim Laden', err);
        });
    };
    UserSearchComponent = __decorate([
        core_1.Component({
            selector: 'user-search',
            templateUrl: './user-search.component.html',
            styleUrls: ['./user-search.component.css']
        })
    ], UserSearchComponent);
    return UserSearchComponent;
}());
exports.UserSearchComponent = UserSearchComponent;
