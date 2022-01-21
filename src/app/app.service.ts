import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }


  HeadLine():Observable<any>{
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&apiKey=72649037262245ca9191c8d082ea5d86`)
  }

  Business():Observable<any>{
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=72649037262245ca9191c8d082ea5d86")
  }
  Tech():Observable<any>{
    return this.http.get<any>(" https://newsapi.org/v2/everything?q=apple&from=2022-01-14&to=2022-01-14&sortBy=popularity&apiKey=72649037262245ca9191c8d082ea5d86")
  }

  Politics():Observable<any>{
    return this.http.get<any>(" https://newsapi.org/v2/top-headlines?q=trump&apiKey=72649037262245ca9191c8d082ea5d86")
  }
}
