import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ListeDetaillee } from '../../interfaces/liste-detaillee';
import { MOCK_LISTEDETAILLEE } from '../../mocks/mock-listeDetaillee';


@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class ListeDetailleeComponent implements OnInit {
  listes: ListeDetaillee[] = [];

  ngOnInit(): void {
    this.listes = MOCK_LISTEDETAILLEE;
  }
}
