import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayLoadingIndicator:boolean = false;
  constructor(private authService:AuthService, private router: Router,private activatedRoute: ActivatedRoute){}
  title = 'angularrouting';
  // constructor(private activatedRoute: ActivatedRoute){}
  // ngOnInit(): void {
  //   this.activatedRoute.fragment.subscribe((value)=>{
  //       console.log(value)
  //       this.jumpTo(value)
  //   })   
  // }

  // jumpTo(section){
  //   document.getElementById(section).scrollIntoView({behavior:'smooth'})
  // }
  
  ngOnInit(){
    this.router.events.subscribe((eventdata)=>{
      console.log('EventData is:'+ eventdata)
      if(eventdata instanceof NavigationStart){
        this.displayLoadingIndicator=true
        console.log(this.displayLoadingIndicator)
      }
    }) 

    this.router.events.subscribe((eventdata)=>{
      console.log('EventData is:'+eventdata)
      if(eventdata instanceof NavigationEnd || eventdata instanceof NavigationCancel || eventdata instanceof NavigationError ){
        this.displayLoadingIndicator=false
        console.log(this.displayLoadingIndicator)
      }
    }) 
  }
  
  
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
