import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangerListeService {
  private triggerSubject = new Subject<{ id: number, trigger: boolean }>();
  trigger$ = this.triggerSubject.asObservable();

  sendIdAndTrigger(id: number) {
    this.triggerSubject.next({ id, trigger: true });
  }
}