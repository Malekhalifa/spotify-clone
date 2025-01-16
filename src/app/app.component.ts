import { Component, } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChansonComponent } from "./composants/chanson/chanson.component";
import { ListeDetailleeComponent } from "./composants/liste-detaillee/liste-detaillee.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BibliothequeComponent } from './composants/bibliotheque/bibliotheque.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [MatSidenavModule,
    ChansonComponent,
    ListeDetailleeComponent, CommonModule, BibliothequeComponent,
  ]
})
export class AppComponent {
  title = 'Mymusic';

  constructor() { }



}
