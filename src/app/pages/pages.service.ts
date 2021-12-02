import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { Userdata } from "./pages.data.model";
const BACKEND_URL = environment.apiUrl + "/user";

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private componentStatusListener = new Subject<boolean>();
  
  getComponentStatusListener() {
    return this.componentStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  createUser = async(obj:Userdata) => new Promise<any>((resolve, rejects) => {
    console.log(obj);
    this.http.post(BACKEND_URL + "/register", obj)
    .subscribe(
      response => {
          this.router.navigate(["/"]);
          resolve(response);
          console.log("inside true");
          
      },
      error => {
        rejects(error);
        console.log(error);
        
        console.log("inside");
      }
    );
  })
  

}
