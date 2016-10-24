import { Component, OnInit, Input }  from '@angular/core';
import { Router } from '@angular/router';

import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
    selector: 'students-list',
    templateUrl: 'app/student/students-list.component.html',
})
export class StudentsListComponent implements OnInit {
    pageTitle: string = 'Student List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    @Input() students: IStudent[] = [];


    constructor(private _studentService: StudentService, private router: Router) {

    }
    getStudents(): void {
        this._studentService.getStudents()
            .then(
            students => this.students = students
            );
    }
    ngOnInit(): void {
        this.getStudents();
    }
onSelect(student: IStudent) {

    // Navigate with relative link
    this.router.navigate(['/student', student.id]);
  }

}