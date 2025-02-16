import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListeService } from '../../services/Gestion-liste/gestion-liste.service';
import { Liste } from '../../interfaces/liste';
import { Chanson } from '../../interfaces/chanson';

@Component({
  selector: 'app-gestion-liste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-liste.component.html',
  styleUrls: ['./gestion-liste.component.css']
})
export class GestionListeComponent implements OnInit {
  listes: Liste[] = [];
  showForm: boolean = false;
  isEditing: boolean = false;
  currentListe: Liste = {
    id: 0,
    titre: '',
    soustitre: '',
    image: '',
    description: '',
    type: '',
    verifie: 0,
    datePublication: '',
    visibilite: '',
    nombreDeSauvgarde: 0
  };
  searchTerm: string = '';
  selectedListeId: number | null = null;
  allChansons: Chanson[] = [];
  selectedChansonId: number = 0;
  chansons: Chanson[] = [];

  constructor(private listeService: ListeService) { }

  ngOnInit(): void {
    this.fetchListes();
    this.fetchAllChansons();
  }

  toggleChansons(liste_id: number): void {
    if (this.selectedListeId === liste_id) {
      // If the same list is clicked again, hide the chansons
      this.selectedListeId = null;
      this.chansons = []; // Clear the chansons array
    } else {
      // If a different list is clicked, update the selectedListeId and fetch chansons
      this.fetchChansonsForList(liste_id); // Fetch chansons for the selected list
      this.selectedListeId = liste_id;
    }
  }


  fetchListes(searchTerm: string = ''): void {
    this.listeService.fetchListes(searchTerm).subscribe({
      next: (data) => this.listes = data,
      error: (error) => console.error('Error fetching lists:', error)
    });
  }

  fetchAllChansons(): void {
    this.listeService.fetchAllChansons().subscribe({
      next: (data) => this.allChansons = data,
      error: (error) => console.error('Error fetching all chansons:', error)
    });
  }

  fetchChansonsForList(liste_id: number): void {
    this.listeService.fetchChansonsForList(liste_id).subscribe({
      next: (data) => this.chansons = Array.isArray(data) ? data : [],
      error: (error) => {
        console.error('Error fetching chansons for list:', error);
        this.chansons = [];
      }
    });
  }

  addChansonToList(liste_id: number, chanson_id: number): void {
    this.listeService.addChansonToList(liste_id, chanson_id).subscribe({
      next: () => this.fetchChansonsForList(liste_id),
      error: (error) => console.error('Error adding chanson to list:', error)
    });
  }

  removeChansonFromList(liste_id: number, chanson_id: number): void {
    this.listeService.removeChansonFromList(liste_id, chanson_id).subscribe({
      next: () => this.fetchChansonsForList(liste_id),
      error: (error) => console.error('Error removing chanson from list:', error)
    });
  }

  onSearch(): void {
    this.fetchListes(this.searchTerm);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.isEditing = false;
      this.resetForm();
    }
  }

  resetForm(): void {
    this.currentListe = {
      id: 0,
      titre: '',
      soustitre: '',
      image: '',
      description: '',
      type: '',
      verifie: 0,
      datePublication: '',
      visibilite: '',
      nombreDeSauvgarde: 0
    };
  }

  validateVisibilite(visibilite: string): boolean {
    return ['publique', 'prive'].includes(visibilite);
  }

  valideVerifie(verifie: number): boolean {
    return [0, 1].includes(verifie);
  }

  createListe(): void {
    if (!this.validateVisibilite(this.currentListe.visibilite)) {
      alert("Invalid value for visibilite. Allowed values are 'publique' or 'prive'.");
      return;
    }
    if (!this.valideVerifie(this.currentListe.verifie)) {
      this.currentListe.verifie = 0;
    }
    this.listeService.createListe(this.currentListe).subscribe({
      next: () => {
        this.fetchListes();
        this.toggleForm();
      },
      error: (error) => console.error('Error creating list:', error)
    });
  }

  editListe(liste: Liste): void {
    this.currentListe = { ...liste };
    this.isEditing = true;
    this.showForm = true;
  }

  updateListe(): void {
    if (!this.validateVisibilite(this.currentListe.visibilite)) {
      alert("Invalid value for visibilite. Allowed values are 'publique' or 'prive'.");
      return;
    }
    this.listeService.updateListe(this.currentListe).subscribe({
      next: () => {
        this.fetchListes();
        this.toggleForm();
      },
      error: (error) => console.error('Error updating list:', error)
    });
  }

  deleteListe(id: number): void {
    this.listeService.deleteListe(id).subscribe({
      next: () => this.fetchListes(),
      error: (error) => console.error('Error deleting list:', error)
    });
  }
}