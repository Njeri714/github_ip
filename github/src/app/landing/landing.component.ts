import { Component, OnInit } from '@angular/core';
import { MydetailsService } from '../mydetails.service';
import { Repos } from '../classes/repos';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
   user:any;
   repos:any = Repos;
   users:any;
  constructor(private MydetailsService: MydetailsService) { }

  ngOnInit(): void {
    this.getmydetsils();
    this.getrepositories();
    this.getuser();
  
  }
  getuser(){
    this.MydetailsService.searchSearch();
    
    
  }
  getmydetsils(){
  this.MydetailsService.getusers().subscribe((data) => {
    this.user = data;
    
  }) ;
  }
  getrepositories(){
     this.MydetailsService.getrepos().subscribe((repos) => {
      this.repos = repos;
     })
  }
  
}
function data(data: any): any {
  throw new Error('Function not undestood!');
}

