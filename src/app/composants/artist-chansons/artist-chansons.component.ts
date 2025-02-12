import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Chanson } from '../../interfaces/chanson';
import { ArtisteChansonService } from '../../services/Artiste-chansons/artiste-chansons.service';

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

  constructor(private ArtisteChansonService: ArtisteChansonService) { }

  ngOnInit(): void {
    this.fetchArtists();
  }

  fetchArtists(): void {
    this.ArtisteChansonService.getArtists().subscribe({
      next: (data) => this.artists = data,
      error: () => this.errorMessage = 'Failed to load artists'
    });
  }

  onArtistSelect(): void {
    if (!this.selectedArtist) return;

    this.ArtisteChansonService.getChansonsByArtist(this.selectedArtist).subscribe({
      next: (data) => {
        this.chansons = data;
        this.errorMessage = data.length === 0 ? 'No chansons found for this artist' : '';
      },
      error: () => this.errorMessage = 'Failed to load chansons'
    });
  }
}