import { Input, OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListeDetailleService } from '../../services/Liste-detaille/liste-detaille.service';
import { Liste } from '../../interfaces/liste';

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
  @Input() id!: number; // Receiving the ID from the parent

  constructor(private listeDetailleService: ListeDetailleService) { }

  ngOnInit(): void {
    console.log("id : ", this.id);
    this.fetchListes();
  }

  fetchListes(): void {
    this.listeDetailleService.fetchListes(this.id).subscribe({
      next: (data) => (this.listes = data),
      error: (error) => console.error('Error fetching lists:', error)
    });
  }
}