import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component'
import { CoursesService } from './Services/course.service';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';
import { CanDeactivateGuardService } from './Services/canDeactivateGuard.service';
import { CourseResolveService } from './Services/course-resolve.service';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule              
  ],
  providers: [
CoursesService,
CourseGuardService,
AuthService ,
CanDeactivateGuardService,
CourseResolveService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
