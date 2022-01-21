import { PoliticsComponent } from './politics/politics.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';

const routes: Routes = [
  {path:"",component:HeadlineComponent},
  {path:"headline",component:HeadlineComponent},
  {path:"business",component:BusinessComponent},
  {path:"tech",component:TechComponent},
  {path:'politics',component:PoliticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
