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
var router_1 = require('@angular/router');
var student_service_1 = require('./student.service');
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(studentService, route) {
        this.studentService = studentService;
        this.route = route;
    }
    StudentDashboardComponent.prototype.getStudent = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var stuID = +params['studentID'];
            _this.studentService.getStudent(stuID)
                .then(function (student) { return _this.student = student; }, function (errorMessage) { return _this.errorMessage = errorMessage; });
        });
    };
    StudentDashboardComponent.prototype.ngOnInit = function () {
        this.getStudent();
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            // selector: 'student-main',
            templateUrl: 'app/student/student-dashboard.component.html',
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, router_1.ActivatedRoute])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;
//# sourceMappingURL=student-dashboard.component.js.map