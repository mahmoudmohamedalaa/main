import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, map, throwError } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class NewsService{
  API_KEY:string='f338f50284e94bcb90d9442d2ebaeb34';
  private newsUrl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`
  constructor (private http:HttpClient){}
  getNews():Observable<any>{
    return this.http.get<any>(this.newsUrl).pipe(
      map(data=>{return data.articles}),
      catchError(this.handleError)
    );}
    private handleError(err: HttpErrorResponse){

      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(() => errorMessage);
    }
  }

