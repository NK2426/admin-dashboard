import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

import { DashboardService } from './dashboard.services';

declare const $: any;

@Component({
  selector: 'dashboard-login',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  user:[];
  userId: any;

  constructor(public authService:AuthService) {}
  ngOnInit(): void {
    console.log("df");

    this.userId = this.authService.getUserId();  
    console.log(this.userId)

   
    
   
  // this.dashboardService.readUser()
  // .then(user_res => {
  //   this.user = user_res;
  //   console.log(user_res);
    
  // })
  // .catch(err => {
  //   console.log(err);
  // });
}
  }