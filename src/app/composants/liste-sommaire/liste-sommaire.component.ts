import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListeSommaire } from '../../interfaces/liste-sommaire';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { Chanson } from '../../interfaces/chanson';

interface Liste {
  id: number;
  titre: string;
  soustitre: string;
  image: string;
  description: string;
  type: string;
  verifie: boolean;
  datePublication: string;
  visibilite: string;
}

@Component({
  selector: 'app-liste-sommaire',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  templateUrl: './liste-sommaire.component.html',
  styleUrl: './liste-sommaire.component.css',
  standalone: true
})
export class ListeSommaireComponent implements OnInit {
  listes: Liste[] = [];
  chansons: Chanson[] = [];
  searchQuery: string = '';
  showInput: boolean = false;
  @Output() idliste = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchListes();
  }

  fetchListes(): void {
    const url = `http://localhost/angular-crud/listesommaire-api.php`;
    this.http.get<Liste[]>(url).subscribe({
      next: (data) => {
        this.listes = data;
      },
      error: (error) => {
        console.error(`Error fetching lists:`, error);
      }
    });
  }
  toggleInput(): void {
    this.showInput = !this.showInput;
  }
  //recover chansons from liste
  sendListeId(liste_id: number): void {//
    this.idliste.emit(liste_id);
    console.log(liste_id, " lllll");
  }

}