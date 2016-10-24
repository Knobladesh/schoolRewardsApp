"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var StudentService = (function () {
    function StudentService(_http) {
        this._http = _http;
        this._studentURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/student/';
        this._studentsURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/students';
    }
    StudentService.prototype.getStudents = function () {
        return this._http.get(this._studentsURL)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //  getStudent(studentID: number): Promise<IStudent> {
    //     return this._http.get(this._studentURL + studentID)
    //       .toPromise()
    //     .then(response => response.json() as IStudent)
    //   .catch(this.handleError);
    //}
    StudentService.prototype.getStudent = function (id) {
        //   return this._http.get(this._studentURL+id)
        //    .toPromise()
        //  .then(response => response.json().data as IStudent)
        //.catch(this.handleError);
        return this.getStudents().then(function (students) { return students.find(function (student) { return student.id === id; }); });
    };
    StudentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map