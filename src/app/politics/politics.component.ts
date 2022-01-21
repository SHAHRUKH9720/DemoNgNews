import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor(private appService:AppService) { }
politics:any[]=[]
  ngOnInit(): void {
    this.appService.Politics().subscribe(
      (data)=>{
        this.politics=data.articles
      }
    )
  }

}
