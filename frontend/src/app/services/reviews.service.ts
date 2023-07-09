import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/';
  private apiReviewlist = this.apiUrl + 'api/v1/reviewlist/';

  getReviews(): Observable<any[]> {
    console.log(this.apiReviewlist)
    return this.http.get<any[]>(this.apiReviewlist);
  }

}
