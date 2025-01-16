import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeChansonsComponent } from '../liste-chansons/liste-chansons.component';
import { MOCK_LISTESOMMAIRE } from '../../mocks/mock-listeSommaire'; // Import the mock list
import { ListeSommaire } from '../../interfaces/liste-sommaire';
import { Chanson } from '../../interfaces/chanson';

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.css'],
  standalone: true,
  imports: [CommonModule, ListeChansonsComponent]
})
export class ListeDetailleeComponent implements OnInit {
  listes: ListeSommaire[] = [];
  chansons: Chanson[] = [];

  ngOnInit(): void {
    this.listes = MOCK_LISTESOMMAIRE.filter(item => item.id === 1 && item.titre === 'Chansons aimées');
    this.chansons = MOCK_LISTESOMMAIRE[0].chansons;
  }
}
