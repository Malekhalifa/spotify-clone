import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BibliothequeComponent } from './composants/bibliotheque/bibliotheque.component';
import { ChansonComponent } from "./composants/chanson/chanson.component";
import { ListeDetailleeComponent } from "./composants/liste-detaillee/liste-detaillee.component";
import { ListeChansonsComponent } from './composants/liste-chansons/liste-chansons.component';
import { HttpClient } from '@angular/common/http';
import { Chanson } from './interfaces/chanson';
import { ListeCompletComponent } from './composants/liste-complete/liste-complete.component';
import { GestionListeComponent } from './gestion-liste/gestion-liste.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ArtistChansonsComponent } from './artist-chansons/artist-chansons.component';
import { ChansonService } from './services/chanson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    CommonModule,
    BibliothequeComponent,
    ChansonComponent,
    ListeDetailleeComponent,
    ListeChansonsComponent,
    ListeCompletComponent,
    GestionListeComponent,
    AdminDashboardComponent,
    ArtistChansonsComponent
  ]
})
export class AppComponent {
  title = 'Mymusic';
  selectedId = 3;
  private http = inject(HttpClient);  // Inject HttpClient directly
  items: Chanson[] = [];
  receivedId!: number;

  newItem: Chanson = {
    id: 0,
    titre: '',
    artiste: '',
    album: '',
    duree: 0,
    nombreDeLectures: 0
  };

  constructor(private chansonService: ChansonService) {
    this.loadItems();
  }

  // Load items from API
  loadItems(): void {

    this.http.get<any[]>('http://localhost/angular-crud/mymusic-api.php').subscribe((data) => {
      this.items = data;
    });
  }

  // Add new item
  addItem(): void {
    if (!this.newItem.titre || !this.newItem.artiste || !this.newItem.album || !this.newItem.duree) {
      console.error('Invalid data: Please fill all required fields');
      return;
    }
    this.http.post('http://localhost/angular-crud/mymusic-api.php', this.newItem).subscribe(() => {
      this.loadItems();
      this.newItem = {
        id: 0,
        titre: '',
        artiste: '',
        album: '',
        duree: 0,
        nombreDeLectures: 0
      };
    });
  }

  // Delete item
  deleteItem(id: number): void {
    this.http.delete(`http://localhost/angular-crud/mymusic-api.php?id=${id}`).subscribe(() => {
      this.loadItems();
    });
  }

  receiveId(id: number) {
    this.receivedId = id;
    console.log('Received ID in parent component:', id);
  }
}
