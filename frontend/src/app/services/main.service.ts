import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/';
  private apiMain = this.apiUrl + 'api/v1/main/';

  getVkPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMain);
  }
}
