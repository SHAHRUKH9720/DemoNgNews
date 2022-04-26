import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadlineComponent } from './headline/headline.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { PoliticsComponent } from './politics/politics.component'
//feature prod
@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    BusinessComponent,
    TechComponent,
    PoliticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
