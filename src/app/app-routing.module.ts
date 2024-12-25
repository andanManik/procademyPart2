import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, ROUTES,Navigation } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component'
import { CourseGuardService } from './Services/course-guard.service';
import { CanDeactivateGuardService } from './Services/canDeactivateGuard.service';
import { CourseResolveService } from './Services/course-resolve.service';

const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Contact', component:ContactComponent,canDeactivate:[CanDeactivateGuardService]},
  {path:'Courses', component:CoursesComponent,resolve:{courses:CourseResolveService}},
 // {path:'Courses/Course/:id', component:CourseComponent},
   {path:'Courses',canActivateChild:[CourseGuardService],children:[
     { path:'Course/:id',component:CourseComponent }]},
  // {path:'Courses',children:[
  //   {path:'Course/:id',component:CourseComponent}
  // ]},
  {path:'About', component:AboutComponent},
  {path:'**',component:ErrorComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
