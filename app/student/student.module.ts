import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { StudentMainComponent }      from './student-main.component';
import { StudentDashboardComponent }      from './student-dashboard.component';

import { StudentsListComponent }      from './students-list.component';
import { CardListComponent }      from '../cards/card-list.component';
import { CardRewardComponent }      from '../cards/card-reward.component';

import { StudentService } from './student.service';
import { CardService } from '../cards/card.service';

import { studentRouting } from './student.routing';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    studentRouting
  ],
  declarations: [
    StudentMainComponent,
    StudentsListComponent,
    CardListComponent,
    StudentDashboardComponent,
    CardRewardComponent

  ],
  providers: [
    StudentService,
    CardService
  ]
})
export class StudentModule {}
