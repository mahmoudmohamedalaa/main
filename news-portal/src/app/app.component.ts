import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICards } from './interfaces/news-card';
import { NewsService } from './shared/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'news-portal';
  errorMessage:string='';
  sub!:Subscription;
  news:ICards[]=[];
  constructor(private newsservice : NewsService){}

  ngOnInit(): void {
    this.sub=this.newsservice.getNews().subscribe({
      next:news=>{this.news=news;
      },
      error: err=>this.errorMessage=err
    });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();

    }


}
