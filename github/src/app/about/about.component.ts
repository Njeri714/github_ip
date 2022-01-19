import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetreposService } from '../repos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  username:string = "";
  repos:any;
  constructor(private GetreposService: GetreposService) { }

  ngOnInit(): void {
  }
  sendusername(forms:NgForm){
    this.GetreposService.getusernames(this.username);
    this.searchUser();
  }
  searchUser(){
    this.GetreposService.getrepos().subscribe((data) => {
      this.repos = data;
      console.log(this.repos);
    })
  }
}
