import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chanson } from '../../interfaces/chanson';

@Injectable({
  providedIn: 'root'
})
export class ChansonDetailleeService {
  private apiUrl = 'http://localhost/mymusic-api'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Fetch suggested chansons from the API
  fetchSuggestedChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(`${this.apiUrl}/chansons-detaille-api.php`, { headers: { 'Content-Type': 'application/json' } });
  }

  // Add a chanson to the current list
  addChansonToList(chanson: Chanson, listeId: number): Observable<any> {
    const payload = {
      chanson_id: chanson.id,
      liste_id: listeId
    };
    return this.http.post(`${this.apiUrl}/chansons-detaille-api.php`, payload);
  }
  removeChansonFromList(chansonId: number, listeId: number): Observable<any> {
    const url = `api/lists/${listeId}/chansons/${chansonId}`; // Adjust the URL based on your API
    return this.http.delete(url);
  }
}