"use strict";
var router_1 = require('@angular/router');
var student_dashboard_component_1 = require('./student-dashboard.component');
var student_main_component_1 = require('./student-main.component');
var students_list_component_1 = require('./students-list.component');
var card_list_component_1 = require('../cards/card-list.component');
var studentRoutes = [
    { path: 'students', component: students_list_component_1.StudentsListComponent },
    {
        path: 'student/:studentID', component: student_main_component_1.StudentMainComponent,
        children: [
            { path: 'medals', component: card_list_component_1.CardListComponent },
            { path: '', component: student_dashboard_component_1.StudentDashboardComponent }
        ]
    }
];
exports.studentRouting = router_1.RouterModule.forChild(studentRoutes);
//# sourceMappingURL=student.routing.js.map