import { Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

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
  nombreDeSauvgarde?: number;
}
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
  @Input() id!: number; // Receiving the ID from parent

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("id : ", this.id);
    this.fetchListes();
  }
  fetchListes(): void {
    this.http.get<Liste[]>(`http://localhost/angular-crud/listedetaille-api.php?liste_id=${this.id}`).subscribe({
      next: (data) => (this.listes = data),
      error: (error) => console.error('Error fetching lists:', error)
    });
  }


}
