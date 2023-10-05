import { Component } from '@angular/core';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapp';
  newsdata: any;
  constructor(private news:NewsService){
    this.news.newshead().subscribe((data:any) =>{
      console.log(data)

      this.newsdata=data.articles
    })
  }
}
