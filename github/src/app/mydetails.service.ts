import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './classes/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MydetailsService {
  results:any = User;
  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    
    return this.http.get<any>("https://github.com/Njeri714/github_ip")
  }
  getrepos():Observable<any>{
    
    return this.http.get<any>("https://github.com/Njeri714/github_ip/repos")
  }
  searchSearch(){

  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get(environment.apiUrl).toPromise().then(response=>{
      this.results = response;
      
      resolve()
    },
    error=>{
      
      reject(error)
    })
  })
  return promise
  }
 
}