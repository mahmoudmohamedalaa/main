import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';
import { Subscription } from 'rxjs';
import { ICards } from '../interfaces/news-card';

@Component({
  selector: 'news-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent implements OnInit , OnDestroy {
  title:string='Hot Topics';
  sub!:Subscription;
  errorMessage:string='';
  topics!:ICards;
  constructor(private newsservice : NewsService){}

  ngOnInit(): void {
    this.sub=this.newsservice.getnews().subscribe({
      next:topics=>{
        if (topics.articles && topics.articles.length > 0) {
          this.topics = topics.articles[0];  // Get the first article
          console.log(this.topics);
        }
      },
      error: err=>this.errorMessage=err
    });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();

    }

}
