import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { RegistrantsListComponent } from './components/registrants-list/registrants-list.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'lessonDeatails', component: LessonDetailsComponent },
    { path: 'lessonList', component: LessonListComponent },
    { path: 'registrantsList', component: RegistrantsListComponent },
    // { path: '**', component: NovalidComponent }
];
