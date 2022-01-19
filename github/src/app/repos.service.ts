import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetreposService {
  tocken = "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";
  username = "";
  slash = "/"
  repos = "repos"
  acc = "?access_token="
  comma = "'"
  constructor(private http:HttpClient) { }
  
  getrepos():Observable<any>{
    const url= "https://api.github.com/users/"
    return this.http.get<any>(url + this.username +  this.slash + this.repos)
    
  }
  getusernames(users:string){
    this.username = users;
  }
}