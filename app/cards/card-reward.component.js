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
var CardRewardComponent = (function () {
    function CardRewardComponent(route) {
        this.route = route;
    }
    CardRewardComponent.prototype.ngOnInit = function () {
    };
    CardRewardComponent.prototype.setClasses = function () {
        var courageFound = false;
        var leadershipFound = false;
        this.card.rewardValues.forEach(function (value) {
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
        __metadata('design:type', Object)
    ], CardRewardComponent.prototype, "card", void 0);
    CardRewardComponent = __decorate([
        core_1.Component({
            selector: 'rewardsCard',
            templateUrl: 'app/cards/card-reward.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], CardRewardComponent);
    return CardRewardComponent;
}());
exports.CardRewardComponent = CardRewardComponent;
//# sourceMappingURL=card-reward.component.js.map