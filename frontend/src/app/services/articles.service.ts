import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/';
  private apiArticle = this.apiUrl + 'api/v1/article/';

  getArticles(): Observable<any[]> {
    console.log(this.apiArticle)
    return this.http.get<any[]>(this.apiArticle);
  }
}
