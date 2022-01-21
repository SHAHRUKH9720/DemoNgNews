import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private appServiece:AppService) { }
tech:any[]=[]
  ngOnInit(): void {
    this.appServiece.Tech().subscribe(
      (data)=>{
        this.tech=data.articles;
      }
    )
  }

}
