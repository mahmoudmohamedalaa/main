import { Component,Input} from '@angular/core';
import { ICards } from '../interfaces/news-card';



@Component({
  selector: 'news-latest',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  title:string='Latest News';
  @Input() news!:ICards[];




  }




