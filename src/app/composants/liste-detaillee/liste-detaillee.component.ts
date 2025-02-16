import { Input, OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListeDetailleService } from '../../services/Liste-detaille/liste-detaille.service';
import { Liste } from '../../interfaces/liste';
import { ChangerListeService } from '../../services/ChangerListe/changer-liste.service';
import { LoadchansonsService } from '../../services/LoadChansons/loadchansons.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListeDetailleeComponent implements OnInit {
  listes: Liste[] = [];
  @Input() id: number = 1; // Default to 1

  constructor(
    private listeDetailleService: ListeDetailleService,
    private changerListe: ChangerListeService,
    private cdr: ChangeDetectorRef,
    private loadchansons: LoadchansonsService
  ) { }

  ngOnInit(): void {
    this.fetchListes();

    // Subscribe to liste changes
    this.changerListe.trigger$.subscribe(data => {
      this.id = data.id;
      this.fetchListes();
      this.loadchansons.sendId(this.id);
      this.cdr.markForCheck();
    });
  }

  fetchListes(): void {
    this.listeDetailleService.fetchListes(this.id).subscribe({
      next: (data) => {
        this.listes = data;
        this.cdr.markForCheck();
      },
      error: (error) => console.error('Error fetching lists:', error)
    });
  }
  formatNumber(number: number | undefined): string {
    if (number === undefined) {
      return 'N/A';  // or any default value or placeholder you'd like to show
    }

    if (number < 1000) {
      return number.toString();  // No change for numbers less than 1000
    } else if (number >= 1000 && number < 1000000) {
      return Math.floor(number / 1000) + 'k';  // For numbers between 1000 and 999999
    } else {
      return Math.floor(number / 1000000) + 'M';  // For numbers 1 million or more
    }
  }


}