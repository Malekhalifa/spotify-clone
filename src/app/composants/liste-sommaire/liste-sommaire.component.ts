import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListeSommaireService } from '../../services/Liste-sommaire/liste-sommaire.service';
import { Liste } from '../../interfaces/liste';
import { Chanson } from '../../interfaces/chanson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-liste-sommaire',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
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

  constructor(private cdr: ChangeDetectorRef, private listeSommaireService: ListeSommaireService) { }

  ngOnInit(): void {
    this.fetchListes();
  }

  fetchListes(): void {
    this.listeSommaireService.fetchListes().subscribe({
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

  sendListeId(liste_id: number): void {
    this.idliste.emit(liste_id);
    console.log(liste_id, " lllll");
  }
}