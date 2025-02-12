import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chanson } from '../../interfaces/chanson';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost/angular-crud';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/artist-api.php`);
  }

  getChansonsByArtist(artist: string): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(`${this.baseUrl}/chansons-by-artist-api.php?artist=${encodeURIComponent(artist)}`);
  }
}