import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeChansonsComponent } from '../liste-chansons/liste-chansons.component';
import { ListeDetaillee } from '../../interfaces/liste-detaillee';
import { MOCK_LISTEDETAILLEE } from '../../mocks/mock-listecomplet';

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.css'],
  standalone: true,
  imports: [CommonModule, ListeChansonsComponent]
})
export class ListeDetailleeComponent implements OnInit {
  listes: ListeDetaillee[] = [];

  ngOnInit(): void {
    this.listes = MOCK_LISTEDETAILLEE;
  }
}
