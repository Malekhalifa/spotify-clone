import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeSommaireComponent } from '../liste-sommaire/liste-sommaire.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-bibliotheque',
  imports: [MatChipsModule, CommonModule, ListeSommaireComponent],
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css'],
  standalone: true,
})
export class BibliothequeComponent {
  constructor() { }

  
}
