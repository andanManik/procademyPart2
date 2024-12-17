import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ContactComponent } from "../contact/contact.component";

export interface iDeactivate{
    canExit: ()=> Observable<boolean>|Promise<boolean>|boolean    
}

export class CanDeactivateGuardService implements CanDeactivate<iDeactivate>{
    
    canDeactivate(component: iDeactivate, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState: RouterStateSnapshot):  Observable<boolean>|Promise<boolean>|boolean {
        return component.canExit();
    }
}