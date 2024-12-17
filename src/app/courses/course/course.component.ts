import { Component, OnDestroy, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private service: CoursesService, private activatedRoute: ActivatedRoute,private router:Router) { }

  course;
  courseId;
  routeParamsObservable;
  isEditMode: boolean = false

  ngOnInit(): void {    

  //Below code is for accessing the parameter usig the snapshot.paramMap being
    //  this.courseId=this.route.snapshot.paramMap.get('id')
    //  this.course=this.service.courses.find(x=>x.id == this.courseId)
    // code is for accessing the parameter usig the snapshot.paramMap being

//Below code is for accessing the parameter using the paramMap observable begin   
    this.routeParamsObservable=this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
      this.course = this.service.courses.find((c)=>c.id == this.courseId)      
    });
//code is for accessing the parameter using the paramMap observable end

//Below code is for accessing the QUERY PARAMETER using the snapshot begin
//But this will not work as the ngOnInit will be executed only once when component loads.. and snapshot will give the initial parameter value only
//So we need to use the paramMap observable 

// this.isEditMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));
// code is for accessing the QUERY PARAMETER using the snapshot END

//Below code is for accessing the QUERY PARAMETER using the paramMap observable BEGIN
this.activatedRoute.queryParamMap.subscribe((QueryParameterString)=>{ 
this.isEditMode = Boolean(QueryParameterString.get('edit'));
console.log(this.isEditMode)
})
//Below code is for accessing the QUERY PARAMETER using the paramMap observable END

  }
  onEditCourse(){
    this.isEditMode=true;    
  }
  appendQueryParam(){
    this.router.navigate(['/Courses/Course',this.courseId],{queryParams:{edit:true}})

    
  }
  ngOnDestroy(){
    this.routeParamsObservable.unsubscribe();
  }
  udpateText(){
    this.isEditMode=false
  }

}
