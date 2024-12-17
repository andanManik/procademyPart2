import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class CourseGuardService implements CanActivate,CanActivateChild{
    constructor(private authService:AuthService,private router: Router){

    }
public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if(this.authService.IsAuthenticated()){
        return true;
    }
    else{
        this.router.navigate([""]);
        return false;
    }

}
public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {
   return this.canActivate(childRoute,state)
}
} 