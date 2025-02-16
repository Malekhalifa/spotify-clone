import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chanson } from '../../interfaces/chanson';
import { ChansonDetailleeService } from '../../services/Chanson-Detaillee/chanson-detaillee.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chansons-detaille',
  templateUrl: './chanson-detaillee.component.html',
  styleUrls: ['./chanson-detaillee.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ChansonsDetailleComponent implements OnInit {
  @Input() selectedChanson: Chanson | null = null;
  @Input() listeId: number = 0; // Input to receive the current liste ID
  @Output() chansonAdded = new EventEmitter<void>(); // EventEmitter to notify parent
  suggestedChansons: Chanson[] = [];

  constructor(private ChansonDetaillee: ChansonDetailleeService
    , private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.selectedChanson) {
      this.fetchSuggestedChansons();
    }
    this.refreshElement();
  }

  fetchSuggestedChansons(): void {
    this.ChansonDetaillee.fetchSuggestedChansons().subscribe({
      next: (data) => {
        this.suggestedChansons = data;
      },
      error: (error) => {
        console.error('Error fetching suggested chansons:', error);
      }
    });
  }

  addToCurrentList(chanson: Chanson): void {
    this.ChansonDetaillee.addChansonToList(chanson, this.listeId).subscribe({
      next: () => {
        console.log('Chanson added to the current list:', chanson);
        this.chansonAdded.emit(); // Emit the event to notify parent
      },
      error: (error) => {
        console.error('Error adding chanson to the list:', error);
      }
    });
    this.refreshElement();
  }

  refreshElement() {
    this.cdr.detectChanges();
  }
}