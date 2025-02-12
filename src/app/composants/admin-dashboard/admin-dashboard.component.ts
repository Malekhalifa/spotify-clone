import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/Admin-dashboard/admin-dashboard.service';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Liste } from '../../interfaces/liste';
import { Chanson } from '../../interfaces/chanson';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  listesParUtilisateur: { [key: number]: Liste[] } = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUtilisateurs();
  }

  fetchUtilisateurs(): void {
    this.apiService.getUtilisateurs().subscribe({
      next: (data) => {
        this.utilisateurs = data;
        this.fetchListesPourUtilisateurs();
      },
      error: (error) => console.error('Error fetching users:', error)
    });
  }

  fetchListesPourUtilisateurs(): void {
    this.utilisateurs.forEach(utilisateur => {
      this.apiService.getListesParUtilisateur(utilisateur.id).subscribe({
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
    this.apiService.getChansonsPourListe(playlist.id).subscribe({
      next: (chansons) => {
        playlist.chansons = chansons;
      },
      error: (error) => console.error('Error fetching songs:', error)
    });
  }
}