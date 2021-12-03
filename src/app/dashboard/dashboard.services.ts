import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({ providedIn: "root" })
export class DashboardService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  readUser = async(query?: any) => new Promise<any>((resolve, rejects) => {
    console.log("insidde service");
    
    this.http.get<any>(BACKEND_URL + "/register" + (query ? query :''))
    .subscribe(
      response => {
        resolve(response);   
        console.log(response);
        
        
      },
      error => {
        rejects(error);
      }
    );
  })

  
  readLogin = async(query?: any) => new Promise<any>((resolve, rejects) => {
    console.log("insidde service");
    this.http.get<any>(BACKEND_URL + "/" + (query ? query :''))
    .subscribe(
      response => {
        resolve(response);   
        console.log(response);
             
      },
      error => {
        rejects(error);
      }
    );
  })

  
}