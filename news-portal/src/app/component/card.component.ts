import { Component,Input} from '@angular/core';
import { ICards } from '../interfaces/news-card';


@Component({
  selector: 'news-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() Card!:ICards;


}
