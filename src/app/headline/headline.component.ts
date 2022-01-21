import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private appService:AppService) { }
  headline:any[]=[]
  ngOnInit(): void {
    this.appService.HeadLine().subscribe(
      (data)=>{
        // console.log(data)
        this.headline=data.articles;
        console.log(this.headline)
      }
    )

  }

}
