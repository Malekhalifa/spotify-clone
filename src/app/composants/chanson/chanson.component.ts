import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChansonService, Chanson } from '../../services/chanson.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chanson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.css']
})
export class ChansonComponent implements OnInit {
  private nextId = 1;
  chansons: Chanson[] = [];
  selectedChanson: Chanson = {
    id: 0,
    titre: '',
    artiste: '',
    album: '',
    duree: 0,
    nombreDeLectures: 0,
    paroles: '', // Optional
    datePublication: '' // Optional
  };

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.loadChansons();
  }

  loadChansons(): void {
    this.chansonService.getChansons().subscribe({
      next: (data) => {
        this.chansons = data;

        // Initialize nextId based on the highest ID in the chansons list
        if (this.chansons.length > 0) {
          const maxId = Math.max(...this.chansons.map(chanson => chanson.id));
          this.nextId = maxId + 1;
        } else {
          this.nextId = 1; // If no chansons exist, start from 1
        }
      }
    });
  }

  selectChanson(chanson: Chanson): void {
    this.selectedChanson = { ...chanson };
  }
  createChanson(): void {
    // Ensure the required fields are present
    if (!this.selectedChanson.titre || !this.selectedChanson.artiste || !this.selectedChanson.album || !this.selectedChanson.duree) {
      console.error('Invalid data: Please fill all required fields');
      return;
    }
    this.selectedChanson.id = this.nextId;
    this.nextId++;
    console.log('Creating chanson:', this.selectedChanson);
    this.chansonService.createChanson(this.selectedChanson).subscribe({
      next: (response) => {
        console.log('Chanson created successfully:', response);
        this.loadChansons();
      },
      error: (error) => {
        console.error('Error creating chanson:', error);
      }
    });
  }

  updateChanson(): void {
    this.chansonService.updateChanson(this.selectedChanson).subscribe({
      next: () => {
        this.loadChansons();
        this.selectedChanson = {} as Chanson;
      }
    });
  }

  deleteChanson(id: number): void {
    this.chansonService.deleteChanson(id).subscribe({
      next: () => this.loadChansons()
    });
  }
}