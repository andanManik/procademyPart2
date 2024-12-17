import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./course.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolveService implements Resolve<any>{
    constructor(private coursesService:CoursesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
        return this.coursesService.getAllCourses().then((data)=>{
            return data
        })
    }

}