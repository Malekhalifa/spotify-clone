import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../../interfaces/liste';

@Injectable({
  providedIn: 'root'
})
export class ListeSommaireService {
  private apiUrl = 'http://localhost/angular-crud/listesommaire-api.php';

  constructor(private http: HttpClient) { }

  fetchListes(): Observable<Liste[]> {
    return this.http.get<Liste[]>(this.apiUrl);
  }
}