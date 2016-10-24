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
var card_service_1 = require('../cards/card.service');
var CardListComponent = (function () {
    function CardListComponent(_cardService, route) {
        this._cardService = _cardService;
        this.route = route;
        this.pageTitle = 'Cards';
    }
    CardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = +params["studentID"];
            _this.getAllCards(id);
            //  this.route.params.forEach((params: Params) => {
            //    let id = +params['studentID'];
            //  this.getAllCards(id);
        });
    };
    CardListComponent.prototype.getAllCards = function (studentID) {
        var _this = this;
        this._cardService.getCards(studentID).then(function (cards) { return _this.cards = cards; }, function (error) { return _this.errorMessage = error; });
    };
    CardListComponent.prototype.setClasses = function (card) {
        var courageFound = false;
        var leadershipFound = false;
        card.values.forEach(function (value) {
            if (value.valueName === 'Courage') {
                courageFound = true;
            }
            if (value.valueName === 'Leadership') {
                leadershipFound = true;
            }
        });
        var classes = {
            'courage': courageFound,
            'leadership': leadershipFound,
            'mdl-card__title-text': 1 == 1,
        };
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CardListComponent.prototype, "cards", void 0);
    CardListComponent = __decorate([
        core_1.Component({
            selector: 'cardList',
            templateUrl: 'app/cards/card-list.component.html'
        }), 
        __metadata('design:paramtypes', [card_service_1.CardService, router_1.ActivatedRoute])
    ], CardListComponent);
    return CardListComponent;
}());
exports.CardListComponent = CardListComponent;
//# sourceMappingURL=card-list.component.js.map