import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Liste } from '../../interfaces/liste';
import { Chanson } from '../../interfaces/chanson';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private baseUrl = 'http://localhost/angular-crud';

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}/utilisateurs-api.php`);
  }

  getListesParUtilisateur(utilisateurId: number): Observable<Liste[]> {
    return this.http.get<Liste[]>(`${this.baseUrl}/listes-utilisateur-api.php?utilisateur_id=${utilisateurId}`);
  }

  getChansonsPourListe(listeId: number): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(`${this.baseUrl}/gestion-liste-api.php?liste_id=${listeId}`);
  }
}