import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SearchuserService {
  username = "";
  
 

  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    
    return this.http.get<any>("https://github.com/Njeri714/github_ip/" + this.username )
  }
  getusername(users:string){
     this.username = users;
  }
}