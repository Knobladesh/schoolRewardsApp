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
var CardService = (function () {
    function CardService(_http) {
        this._http = _http;
        this._studentURL = 'http://54.79.30.44/schoolRewardsV1/api/schoolRewards/public/api/rewards/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //getCards(): Observable<ICard[]> {
    //   return this._http.get(this._studentURL)
    //     .map((response: Response) => <ICard[]> response.json())
    //      .do(data => console.log('All: ' +  JSON.stringify(data)))
    //       .catch(this.handleError);
    // }
    CardService.prototype.getCards = function (studentID) {
        return this._http.get(this._studentURL + studentID)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ///getStudentCards(id: number): Promise<ICard[]> {
    //    return this.getCards().then(cards => cards.find(card=>card.studentId === id));
    //  }
    CardService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CardService);
    return CardService;
}());
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map