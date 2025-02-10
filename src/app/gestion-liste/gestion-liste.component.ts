import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Liste {
  id: number;
  titre: string;
  soustitre: string;
  image: string;
  description: string;
  type: string;
  verifie: number;
  datePublication: string;
  visibilite: string;
}

interface Chanson {
  id: number;
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
    visibilite: ''
  };
  searchTerm: string = '';
  selectedListeId: number | null = null;
  allChansons: Chanson[] = [];
  selectedChansonId: number = 0;
  chansons: Chanson[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchListes();
    this.fetchAllChansons();
  }

  fetchListes(searchTerm: string = ''): void {
    let url = 'http://localhost/angular-crud/gestion-liste-api.php';
    if (searchTerm) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    this.http.get<Liste[]>(url).subscribe({
      next: (data) => (this.listes = data),
      error: (error) => console.error('Error fetching lists:', error)
    });
  }

  fetchAllChansons(): void {
    this.http.get<Chanson[]>('http://localhost/angular-crud/chansons-api.php').subscribe({
      next: (data) => (this.allChansons = data),
      error: (error) => console.error('Error fetching all chansons:', error)
    });
  }

  fetchChansonsForList(liste_id: number): void {
    this.http.get<Chanson[]>(`http://localhost/angular-crud/gestion-liste-api.php?liste_id=${liste_id}`).subscribe({
      next: (data) => {
        console.log("Fetched chansons:", data); // Log the response
        this.chansons = Array.isArray(data) ? data : []; // Ensure `data` is an array
      },
      error: (error) => {
        console.error('Error fetching chansons for list:', error);
        this.chansons = []; // Reset to an empty array on error
      }
    });
  }

  addChansonToList(liste_id: number, chanson_id: number): void {
    this.http.post(`http://localhost/angular-crud/gestion-liste-api.php`, { liste_id, chanson_id }).subscribe({
      next: () => {
        // After adding the chanson, refresh the list of chansons
        this.fetchChansonsForList(liste_id)
      },
      error: (error) => console.error('Error adding chanson to list:', error)
    });
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

  removeChansonFromList(liste_id: number, chanson_id: number): void {
    this.http.delete(`http://localhost/angular-crud/gestion-liste-api.php?liste_id=${liste_id}&chanson_id=${chanson_id}`).subscribe({
      next: () => {
        // After removing the chanson, refresh the list of chansons
        this.fetchChansonsForList(liste_id);
      },
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
      visibilite: ''
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
    this.http.post('http://localhost/angular-crud/gestion-liste-api.php', this.currentListe).subscribe({
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
    this.http.put(`http://localhost/angular-crud/gestion-liste-api.php`, this.currentListe).subscribe({
      next: () => {
        this.fetchListes();
        this.toggleForm();
      },
      error: (error) => console.error('Error updating list:', error)
    });
  }

  deleteListe(id: number): void {
    this.http.delete(`http://localhost/angular-crud/gestion-liste-api.php?id=${id}`).subscribe({
      next: () => this.fetchListes(),
      error: (error) => console.error('Error deleting list:', error)
    });
  }
}