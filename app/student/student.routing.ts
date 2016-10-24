import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { StudentDashboardComponent }      from './student-dashboard.component';

import { StudentMainComponent }      from './student-main.component';
import { StudentsListComponent }      from './students-list.component';
import { CardListComponent }      from '../cards/card-list.component';

const studentRoutes: Routes = [

    { path: 'students', component: StudentsListComponent },
    {
        path: 'student/:studentID', component: StudentMainComponent,
        children: [
            { path: 'medals', component: CardListComponent },
            { path: '', component: StudentDashboardComponent }
        ]
    }
];

export const studentRouting: ModuleWithProviders = RouterModule.forChild(studentRoutes);
