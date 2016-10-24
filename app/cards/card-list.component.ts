import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CardService } from '../cards/card.service';
import { ICard } from './card';
import { IValue } from '../value/value';

import { CardRewardComponent } from './card-reward.component';

@Component({
    selector:'cardList',
    templateUrl: 'app/cards/card-list.component.html'
    
})
export class CardListComponent implements OnInit {
     constructor( private _cardService: CardService, private route: ActivatedRoute
        ) {
    }
    pageTitle: string = 'Cards';

    errorMessage: string;
    @Input() cards: ICard[];
ngOnInit(): void {
    this.route.parent.params.subscribe(params => {
            let id = +params["studentID"];
            this.getAllCards(id);
  //  this.route.params.forEach((params: Params) => {
    //    let id = +params['studentID'];
      //  this.getAllCards(id);
    });
    }

getAllCards(studentID : number) {
        this._cardService.getCards(studentID).then(
            cards => this.cards = cards,
            error => this.errorMessage = <any>error);
    }
    
setClasses(card : ICard) {
  let courageFound = false;
    let leadershipFound = false;

  card.values.forEach((value:IValue)=>{
      if (value.valueName==='Courage'){
    courageFound = true;

      }
      if (value.valueName==='Leadership'){
    leadershipFound = true;

      }
  });
 let classes =  {
    'courage': courageFound ,      // 
    'leadership': leadershipFound,
    'mdl-card__title-text':1==1,// 
  };
  return classes;
}
}
