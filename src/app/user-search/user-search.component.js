"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var UserSearchComponent = (function () {
    function UserSearchComponent(http) {
        this.http = http;
        this.users = [];
    }
    UserSearchComponent.prototype.ngOnInit = function () { };
    UserSearchComponent.prototype.search = function () {
        var _this = this;
        //Suchefunktion
        var url = 'http://localhost:8080/users/search/findByFirstnameAndLastname/';
        var headers = new http_1.HttpHeaders()
            .set('Accept', 'application/json');
        var params = new http_2.HttpParams()
            .set('firstname', this.firstname)
            .set('lastname', this.lastname);
        this.http
            .get(url, { headers: headers, params: params })
            .subscribe(function (users) {
            _this.users = users;
        }, function (errResp) {
            console.error('error loading users', errResp);
        });
    };
    UserSearchComponent.prototype.select = function (u) {
        this.selectedUser = u;
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
