import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/Admin-dashboard/admin-dashboard.service';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Liste } from '../../interfaces/liste';
import { HttpClient } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [NgFor, CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  listesParUtilisateur: { [key: number]: Liste[] } = {};

  constructor(private AdminDashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    this.fetchUtilisateurs();
  }

  fetchUtilisateurs(): void {
    this.AdminDashboardService.getUtilisateurs().subscribe({
      next: (data) => {
        this.utilisateurs = data;
        this.fetchListesPourUtilisateurs();
      },
      error: (error) => console.error('Error fetching users:', error)
    });
  }

  fetchListesPourUtilisateurs(): void {
    this.utilisateurs.forEach(utilisateur => {
      this.AdminDashboardService.getListesParUtilisateur(utilisateur.id).subscribe({
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
    this.AdminDashboardService.getChansonsPourListe(playlist.id).subscribe({
      next: (chansons) => {
        playlist.chansons = chansons;
      },
      error: (error) => console.error('Error fetching songs:', error)
    });
  }
}