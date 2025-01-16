import { Component, Input, OnInit } from '@angular/core';
import { Chansons } from '../../interfaces/chansons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chanson',
  imports: [CommonModule],
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.css'],
  standalone: true
})
export class ChansonComponent implements OnInit {
  @Input() chanson!: Chansons;

  ngOnInit(): void {
  }
}
