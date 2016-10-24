"use strict";
var router_1 = require('@angular/router');
var student_main_component_1 = require('./student-main.component');
var students_list_component_1 = require('./students-list.component');
var studentMainRoutes = [
    {
        path: 'students',
        component: students_list_component_1.StudentsListComponent
    },
    {
        path: 'student/:studentID',
        component: student_main_component_1.StudentMainComponent,
    }
];
exports.studentMainRouting = router_1.RouterModule.forChild(studentMainRoutes);
//# sourceMappingURL=student-main.routing.js.map