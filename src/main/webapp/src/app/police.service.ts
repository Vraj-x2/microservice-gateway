import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Police } from './police';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {
private baseUrl = '/api/police'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Police[]> {
    return this.http.get<Police[]>(this.baseUrl);
  }

  create(police: Police): Observable<Police> {
    return this.http.post<Police>(this.baseUrl, police);
  }
}
