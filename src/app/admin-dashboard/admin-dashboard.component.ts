import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
}

interface Liste {
  id: number;
  titre: string;
  soustitre: string;
  description: string;
  visibilite: string;
  chansons: Chanson[];
}

interface Chanson {
  id: number;
  titre: string;
  artiste: string;
  duree: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [NgFor, CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  listesParUtilisateur: { [key: number]: Liste[] } = {} ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUtilisateurs();
  }

  fetchUtilisateurs(): void {
    this.http.get<Utilisateur[]>('http://localhost/angular-crud/utilisateurs-api.php').subscribe({
      next: (data) => {
        this.utilisateurs = data;
        this.fetchListesPourUtilisateurs();
      },
      error: (error) => console.error('Error fetching users:', error)
    });
  }

  fetchListesPourUtilisateurs(): void {
    this.utilisateurs.forEach(utilisateur => {
      this.http.get<Liste[]>(`http://localhost/angular-crud/listes-utilisateur-api.php?utilisateur_id=${utilisateur.id}`).subscribe({
        next: (playlists) => {
          playlists.forEach(playlist => {
            this.fetchChansonsPourListe(playlist);
          });
          this.listesParUtilisateur[utilisateur.id] = playlists;
        },
        error: (error) => console.error('Error fetching playlists:', error)
      });
    });
  }

  fetchChansonsPourListe(playlist: Liste): void {
    this.http.get<Chanson[]>(`http://localhost/angular-crud/gestion-liste-api.php?liste_id=${playlist.id}`).subscribe({
      next: (chansons) => {
        playlist.chansons = chansons;
      },
      error: (error) => console.error('Error fetching songs:', error)
    });
  }
}