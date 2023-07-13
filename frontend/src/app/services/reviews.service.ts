import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/';
  private apiReviews = this.apiUrl + 'api/v1/review/';
  private apiCourses = this.apiUrl + 'api/v1/course/';

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiReviews);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiCourses);
  }
}
