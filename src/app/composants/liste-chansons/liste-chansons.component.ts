import { Component, OnInit } from '@angular/core';
import { Chanson } from '../../interfaces/chanson';
import { MOCK_CHANSONS } from '../../mocks/mock-chansons';
import { CommonModule } from '@angular/common';
import { MOCK_LISTESOMMAIRE } from '../../mocks/mock-listeSommaire';


import { DurationPipe } from '../../duration-pipe.pipe';
import { NumberFormatPipe } from '../../number-format.pipe';

@Component({
  selector: 'app-liste-chansons',
  templateUrl: './liste-chansons.component.html',
  styleUrls: ['./liste-chansons.component.css'],
  imports: [CommonModule,
    DurationPipe,
    NumberFormatPipe
  ],
  standalone: true
})
export class ListeChansonsComponent implements OnInit {
  chansons: Chanson[] = [];
  verifiedArtists: Set<string> = new Set(); // To store verified artists
  selectedChanson: Chanson | null = null; // Initialize to null

  constructor() { }

  ngOnInit(): void {
    this.chansons = MOCK_CHANSONS;  // ✅ Chargement des chansons mockées
    this.loadVerifiedArtists();
  }

  loadVerifiedArtists() {
    MOCK_LISTESOMMAIRE.forEach(liste => {
      if (liste.verifie) {
        liste.chansons.forEach(chanson => {
          this.verifiedArtists.add(chanson.artiste); // Add verified artist to the set
        });
      }
    });
  }

  isArtistVerified(artiste: string): boolean {
    return this.verifiedArtists.has(artiste); // Check if the artist is verified
  }

  selectChanson(chanson: Chanson) {
    this.selectedChanson = chanson; // Update the selected chanson
  }
  isPopular(chanson: Chanson): boolean {
    return chanson.nombreDeLectures > 1000000;
  }
}

