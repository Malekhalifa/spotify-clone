import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../../interfaces/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeCompleteService {
  private apiUrl = 'http://localhost/angular-crud/liste-api.php';

  constructor(private http: HttpClient) { }

  fetchListes(visibilite: string): Observable<Liste[]> {
    return this.http.get<Liste[]>(`${this.apiUrl}?visibilite=${visibilite}`);
  }
}