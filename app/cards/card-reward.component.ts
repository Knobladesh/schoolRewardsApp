import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ICard } from './card';
import { IValue } from '../value/value';

@Component({
    selector:'rewardsCard',
    templateUrl: 'app/cards/card-reward.component.html'
    
})
export class CardRewardComponent implements OnInit {
     constructor( private route: ActivatedRoute
        ) {
    }
   

    errorMessage: string;
    @Input() card: ICard;
ngOnInit(): void {

   
    
    }


    
setClasses() {
  let courageFound = false;
    let leadershipFound = false;

  this.card.rewardValues.forEach((value:IValue)=>{
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
