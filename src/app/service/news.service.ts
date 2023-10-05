import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  apikey="2f6a70c5ecf5417daf3164dbbbe63e71"
  newshead(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=2f6a70c5ecf5417daf3164dbbbe63e71")
  }
}
