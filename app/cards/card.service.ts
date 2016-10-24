import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


//import { Observable } from 'rxjs/Observable';

import { ICard } from './card';

@Injectable()
export class CardService {
    private _studentURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/rewards/';
private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private _http: Http) { }

    //getCards(): Observable<ICard[]> {
     //   return this._http.get(this._studentURL)
       //     .map((response: Response) => <ICard[]> response.json())
      //      .do(data => console.log('All: ' +  JSON.stringify(data)))
     //       .catch(this.handleError);
   // }
 getCards(studentID: number): Promise<ICard[]> {
        return this._http.get(this._studentURL+studentID)
            .toPromise()
            .then(response => response.json() as ICard[])
            .catch(this.handleError);
    }

    ///getStudentCards(id: number): Promise<ICard[]> {
    //    return this.getCards().then(cards => cards.find(card=>card.studentId === id));
  //  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
