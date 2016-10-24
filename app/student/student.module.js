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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var student_main_component_1 = require('./student-main.component');
var student_dashboard_component_1 = require('./student-dashboard.component');
var students_list_component_1 = require('./students-list.component');
var card_list_component_1 = require('../cards/card-list.component');
var card_reward_component_1 = require('../cards/card-reward.component');
var student_service_1 = require('./student.service');
var card_service_1 = require('../cards/card.service');
var student_routing_1 = require('./student.routing');
var StudentModule = (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                student_routing_1.studentRouting
            ],
            declarations: [
                student_main_component_1.StudentMainComponent,
                students_list_component_1.StudentsListComponent,
                card_list_component_1.CardListComponent,
                student_dashboard_component_1.StudentDashboardComponent,
                card_reward_component_1.CardRewardComponent
            ],
            providers: [
                student_service_1.StudentService,
                card_service_1.CardService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map