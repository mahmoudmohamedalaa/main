import { Component } from '@angular/core';
import { ICards } from '../interfaces/news-card';

@Component({
  selector: 'news-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardTitle:string='News Title Lorem Ipsum Dolor Sit Amet';
  cardText:string='1 Hour Ago';
  cardText2:string='CNN Indonesia';
  cards:ICards[]=[{
    imageUrl:'/assets/images/fight.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/running.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/jumping.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/practicing.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/cycling.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/surfing.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/handball.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  },
  {
    imageUrl:'/assets/images/cycling2.png',
    cardTitle:this.cardTitle,
    cardText1:this.cardText,
    cardText2:this.cardText2
  }]
}
