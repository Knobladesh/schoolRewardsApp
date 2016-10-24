

import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import {IStudent} from './student';
import {StudentService} from './student.service';
@Component({
    // selector: 'student-main',
    templateUrl: 'app/student/student-dashboard.component.html',

})
export class StudentDashboardComponent implements OnInit {
    student: IStudent;
    public stuID: number;
    errorMessage: string;
    constructor(private studentService: StudentService, private route: ActivatedRoute) { }
    getStudent(): void {
        this.route.params.forEach((params: Params) => {
            let stuID = +params['studentID'];
            this.studentService.getStudent(stuID)
                .then(student => this.student = student, errorMessage => this.errorMessage = errorMessage);
        });
    }
    ngOnInit(): void {

        this.getStudent();
    }

}