import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../../interfaces/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeDetailleService {
  private apiUrl = 'http://localhost/angular-crud/listedetaille-api.php';

  constructor(private http: HttpClient) { }

  fetchListes(id: number): Observable<Liste[]> {
    return this.http.get<Liste[]>(`${this.apiUrl}?liste_id=${id}`);
  }
}