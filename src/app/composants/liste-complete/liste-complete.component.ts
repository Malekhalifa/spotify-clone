import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeCompleteService } from '../../services/Liste-complete/liste-complete.service';
import { Liste } from '../../interfaces/liste';

@Component({
  selector: 'app-liste-complet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-complete.component.html',
  styleUrls: ['./liste-complete.component.css']
})
export class ListeCompletComponent implements OnInit {
  publicListes: Liste[] = [];
  privateListes: Liste[] = [];

  constructor(private listeService: ListeCompleteService) { }

  ngOnInit(): void {
    this.fetchListes('publique');
    this.fetchListes('prive');
  }

  fetchListes(visibilite: string): void {
    this.listeService.fetchListes(visibilite).subscribe({
      next: (data) => {
        if (visibilite === 'publique') {
          this.publicListes = data;
        } else {
          this.privateListes = data;
        }
      },
      error: (error) => console.error(`Error fetching ${visibilite} lists:`, error)
    });
  }
}