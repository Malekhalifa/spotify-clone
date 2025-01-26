import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListeSommaire } from '../../interfaces/liste-sommaire';
import { CommonModule } from '@angular/common';
import { MOCK_LISTESOMMAIRE } from '../../mocks/mock-listeSommaire';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
@Component({
  selector: 'app-liste-sommaire',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './liste-sommaire.component.html',
  styleUrl: './liste-sommaire.component.css',
  standalone: true
})
export class ListeSommaireComponent implements OnInit {
  listes: ListeSommaire[] = [];
  searchQuery: string = '';
  showInput: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.listes = MOCK_LISTESOMMAIRE;
  }

  filteredListes(): ListeSommaire[] {
    if (!this.searchQuery) {
      return this.listes;
    }
    return this.listes.filter(liste =>
      liste.titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      liste.type.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  toggleInput(): void {
    this.showInput = !this.showInput;
    this.cdr.detectChanges();
  }
}
