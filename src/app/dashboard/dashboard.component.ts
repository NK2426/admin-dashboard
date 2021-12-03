import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { PagesService } from 'app/pages/pages.service';

import { DashboardService } from './dashboard.services';

declare const $: any;

@Component({
  selector: 'dashboard-login',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{
 
  title :"ma"
  userId: any;
  documents:[name:string,phone:number,email:string];
  login: [];
  
  user: Array<{id: number, name: string}> = [];

 
  constructor(public authService:AuthService,public dashboardService:DashboardService, public pagesService:PagesService) {}
  ngOnInit(): void {
    console.log("df");

    this.userId = this.authService.getUserId();  
    console.log(this.userId)

   
    this.dashboardService.readLogin("?active=true")
    .then(login_res => {
      this.login = login_res;
      console.log("login",login_res);
      
    })
    .catch(err => {
      console.log(err);
    });

      this.dashboardService.readUser('?active=true')
      .then(user_res =>{
        console.log("user",user_res);
        user_res =this.user

      })
      .catch(err => {
        console.log(err);
      })
      
    
     
  
  
    
}
  }