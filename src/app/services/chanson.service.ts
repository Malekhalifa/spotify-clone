import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Chanson {
  id: number;
  titre: string;
  artiste: string;
  paroles: string;
  album: string;
  datePublication: string;
  nombreDeLectures?: number,
  duree: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  private apiUrl = 'http://localhost/angular-crud/mymusic-api.php';

  constructor(private http: HttpClient) { }

  getChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(this.apiUrl);
  }

  getChanson(id: number): Observable<Chanson> {
    return this.http.get<Chanson>(`${this.apiUrl}?id=${id}`);
  }

  createChanson(chanson: Chanson): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, chanson, { headers });
  }

  updateChanson(chanson: Chanson): Observable<any> {
    return this.http.put(this.apiUrl, chanson);
  }

  deleteChanson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}