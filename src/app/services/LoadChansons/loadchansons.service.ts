import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadchansonsService {
  private idSource = new BehaviorSubject<number | null>(null);
  currentId = this.idSource.asObservable();

  sendId(id: number) {
    this.idSource.next(id);
  }
}
