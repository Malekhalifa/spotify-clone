import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOCK_LISTESOMMAIRE } from '../../mocks/mock-listeSommaire';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ListeSommaire } from '../../interfaces/liste-sommaire';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule

@Component({
  selector: 'app-liste-sommaire',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgIf, MatFormFieldModule, MatInputModule],
  templateUrl: './liste-sommaire.component.html',
  styleUrls: ['./liste-sommaire.component.css'],
  standalone: true
})
export class ListeSommaireComponent implements OnInit {
  listes: ListeSommaire[] = [];
  showInput: boolean = false;
  inputValue: string = '';

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listes = MOCK_LISTESOMMAIRE;
  }

  toggleInput(): void {
    this.showInput = !this.showInput;
    this.cdr.detectChanges();
  }
}
