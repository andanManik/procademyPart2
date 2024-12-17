import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/course.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseResolveService } from '../Services/course-resolve.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  constructor(private coursesService: CoursesService,private activatedRoute:ActivatedRoute) { }

  courses = [];

  ngOnInit():void {
    //this.courses = this.coursesService.courses
    //  this.coursesService.getAllCourses().then((data)=>{
    //   this.courses = data;
  this.courses=  this.activatedRoute.snapshot.data['courses']
     }
  }


