import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeSommaireComponent } from '../liste-sommaire/liste-sommaire.component';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-bibliotheque',
  imports: [MatChipsModule, CommonModule, ListeSommaireComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BibliothequeComponent {
  searchQuery: string = ''; // Déclaration de la variable pour la recherche
}
