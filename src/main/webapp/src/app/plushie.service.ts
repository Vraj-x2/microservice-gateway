import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plushie } from './plushie'; 

@Injectable({
  providedIn: 'root'
})
export class PlushieService {
 private baseUrl = '/api/plushies';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Plushie[]> {
    return this.http.get<Plushie[]>(this.baseUrl);
  }

  create(plushie: Plushie): Observable<Plushie> {
    return this.http.post<Plushie>(this.baseUrl, plushie);
  }

  update(plushie: Plushie): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${plushie.id}`, plushie);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
