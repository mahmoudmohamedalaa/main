import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICards } from '../interfaces/news-card';
import { Subscription } from 'rxjs';
import { NewsService } from '../news/news.service';
import { Console } from 'console';

@Component({
  selector: 'news-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit , OnDestroy {
  errorMessage:string='';
  sub!:Subscription;
  news:ICards[]=[];
  constructor(private newsservice : NewsService){}

  ngOnInit(): void {
    this.sub=this.newsservice.getnews().subscribe({
      next:news=>{this.news=news.articles;

      },
      error: err=>this.errorMessage=err
    });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();

    }

}
