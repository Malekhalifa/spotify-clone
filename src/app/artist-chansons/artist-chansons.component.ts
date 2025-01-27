import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms'; // <-- Add this import
import { CommonModule } from '@angular/common'; // <-- Add this if not already present
interface Chanson {
  id?: number;
  titre: string;
  artiste: string;
  album: string;
  duree: number;
  genre?: string;
  annee?: number;
  image?: string;
  nombreDeLectures: number;
  paroles?: string;
  datePublication?: string;
}

@Component({
  selector: 'app-artist-chansons',
  templateUrl: './artist-chansons.component.html',
  styleUrls: ['./artist-chansons.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],

})
export class ArtistChansonsComponent implements OnInit {
  artists: string[] = [];
  selectedArtist: string = '';
  chansons: Chanson[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchArtists();
  }

  fetchArtists(): void {
    this.http.get<string[]>('http://localhost/angular-crud/artist-api.php').subscribe({
      next: (data) => this.artists = data,
      error: (err) => this.errorMessage = 'Failed to load artists'
    });
  }

  onArtistSelect(): void {
    if (!this.selectedArtist) return;

    this.http.get<Chanson[]>(`http://localhost/angular-crud/chansons-by-artist-api.php?artist=${encodeURIComponent(this.selectedArtist)}`)
      .subscribe({
        next: (data) => {
          this.chansons = data;
          this.errorMessage = data.length === 0 ? 'No chansons found for this artist' : '';
        },
        error: (err) => this.errorMessage = 'Failed to load chansons'
      });
  }
}