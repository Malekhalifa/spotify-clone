import { Component, OnInit } from '@angular/core';
import { Chanson } from '../../interfaces/chanson';
import { CommonModule } from '@angular/common';
import { ListeService } from '../../services/Gestion-liste/gestion-liste.service';
import { LoadchansonsService } from '../../services/LoadChansons/loadchansons.service';
import { ChangeDetectorRef } from '@angular/core';
import { ChangerListeService } from '../../services/ChangerListe/changer-liste.service';
import { ChansonsDetailleComponent } from '../chansons-detaillee/chanson-detaillee.component';
@Component({
  selector: 'app-liste-chansons',
  templateUrl: './liste-chansons.component.html',
  styleUrls: ['./liste-chansons.component.css'],
  imports: [CommonModule, ChansonsDetailleComponent],
  standalone: true
})
export class ListeChansonsComponent implements OnInit {
  chansons: Chanson[] = [];
  verifiedArtists: Set<string> = new Set();
  selectedChanson: Chanson | null = null;
  selectedListeId: number = 1; // Default to 1

  constructor(
    private listeService: ListeService,
    private changerListe: ChangerListeService,
    private loadchansons: LoadchansonsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchChansonsForList(this.selectedListeId);

    // Subscribe to liste changes
    this.changerListe.trigger$.subscribe(data => {
      this.selectedListeId = data.id;
      this.selectedChanson = null;
      this.fetchChansonsForList(this.selectedListeId);
      this.refreshElement();
    });
  }

  isArtistVerified(artiste: string): boolean {
    return this.verifiedArtists.has(artiste);
  }

  selectChanson(chanson: Chanson) {
    this.selectedChanson = chanson;
  }

  isPopular(chanson: Chanson): boolean {
    return chanson.nombreDeLectures > 1000000;
  }

  fetchChansonsForList(liste_id: number): void {
    this.listeService.fetchChansonsForList(liste_id).subscribe({
      next: (data) => {
        this.chansons = Array.isArray(data) ? data : [];
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error fetching chansons for list:', error);
        this.chansons = [];
      }
    });
  }
  onChansonAdded(): void {
    this.fetchChansonsForList(this.selectedListeId); // Re-fetch the list of chansons
  }

  refreshElement() {
    this.cdr.detectChanges();
  }
  removeChansonFromList(chanson: Chanson): void {
    this.listeService.removeChansonFromList(this.selectedListeId, chanson.id).subscribe({
      next: () => {
        console.log('Chanson removed from the list:', chanson);
        // Remove the chanson from the local list
        this.chansons = this.chansons.filter(c => c.id !== chanson.id);
        this.cdr.markForCheck(); // Trigger change detection
      },
      error: (error) => {
        console.error('Error removing chanson from the list:', error);
      }
    });
  }

  formatDuree(duree: number): string {
    if (duree < 60) {
      return `0:${duree < 10 ? '0' + duree : duree}`;  // format for < 60 seconds
    }

    const hours = Math.floor(duree / 3600);
    const minutes = Math.floor((duree % 3600) / 60);
    const seconds = duree % 60;

    if (duree < 3600) {
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;  // format for < 3600 seconds
    }

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;  // format for >= 3600 seconds
  }

}