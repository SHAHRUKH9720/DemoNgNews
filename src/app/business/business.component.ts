import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private appService:AppService) { }
  business:any[]=[]
  ngOnInit(): void {
    this.appService.Business().subscribe(
      (data)=>{
        this.business=data.articles;
        console.log(this.business)
      }
    )
  }

}
