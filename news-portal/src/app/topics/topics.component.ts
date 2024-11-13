import { Component, Input } from '@angular/core';
import { ICards } from '../interfaces/news-card';

@Component({
  selector: 'news-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent{
  title:string='Hot Topics';

  @Input() topics!:ICards;


}
