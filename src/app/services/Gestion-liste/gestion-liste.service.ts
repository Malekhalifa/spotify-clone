import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../../interfaces/liste';
import { Chanson } from '../../interfaces/chanson';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  private apiUrl = 'http://localhost/angular-crud/gestion-liste-api.php';

  constructor(private http: HttpClient) { }

  fetchListes(searchTerm: string = ''): Observable<Liste[]> {
    let url = this.apiUrl;
    if (searchTerm) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<Liste[]>(url);
  }

  fetchAllChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>('http://localhost/angular-crud/chansons-api.php');
  }

  fetchChansonsForList(liste_id: number): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(`${this.apiUrl}?liste_id=${liste_id}`);
  }

  addChansonToList(liste_id: number, chanson_id: number): Observable<any> {
    return this.http.post(this.apiUrl, { liste_id, chanson_id });
  }

  removeChansonFromList(liste_id: number, chanson_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?liste_id=${liste_id}&chanson_id=${chanson_id}`);
  }

  createListe(liste: Liste): Observable<any> {
    return this.http.post(this.apiUrl, liste);
  }

  updateListe(liste: Liste): Observable<any> {
    return this.http.put(this.apiUrl, liste);
  }

  deleteListe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}