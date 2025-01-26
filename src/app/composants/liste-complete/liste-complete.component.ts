import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, } from '@angular/common/http';

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
  selector: 'app-liste-complet',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './liste-complete.component.html',
  styleUrls: ['./liste-complete.component.css']
})
export class ListeCompletComponent implements OnInit {
  publicListes: Liste[] = [];
  privateListes: Liste[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchListes('publique'); // Fetch public lists
    this.fetchListes('prive');    // Fetch private lists
  }

  fetchListes(visibilite: string): void {
    const url = `http://localhost/angular-crud/liste-api.php?visibilite=${visibilite}`;
    this.http.get<Liste[]>(url).subscribe({
      next: (data) => {
        if (visibilite === 'publique') {
          this.publicListes = data;
        } else if (visibilite === 'prive') {
          this.privateListes = data;
        }
      },
      error: (error) => {
        console.error(`Error fetching ${visibilite} lists:`, error);
      }
    });
  }
}