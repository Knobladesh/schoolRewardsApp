import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IStudent } from './student';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
    private _studentURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/student/';
    private _studentsURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/students';

    constructor(private _http: Http) { }
    getStudents(): Promise<IStudent[]> {
        return this._http.get(this._studentsURL)
            .toPromise()
            .then(response => response.json() as IStudent[])
            .catch(this.handleError);

    }
 //  getStudent(studentID: number): Promise<IStudent> {
   //     return this._http.get(this._studentURL + studentID)
     //       .toPromise()
       //     .then(response => response.json() as IStudent)
         //   .catch(this.handleError);

    //}
    getStudent(id:number):Promise<IStudent>{
      //   return this._http.get(this._studentURL+id)
        //    .toPromise()
          //  .then(response => response.json().data as IStudent)
            //.catch(this.handleError);
        return this.getStudents().then(
            students=>students.find(student=>student.id===id));
        
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
