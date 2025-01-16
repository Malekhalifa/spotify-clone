import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeChansonsComponent } from './liste-chansons.component';
import { CommonModule } from '@angular/common';
import { CHANSONS_MOCK } from '../../mocks/mock-chansons';

describe('ListeChansonsComponent', () => {
  let component: ListeChansonsComponent;
  let fixture: ComponentFixture<ListeChansonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeChansonsComponent],  // ✅ Doit être dans declarations
      imports: [CommonModule]                  // ✅ Permet d'utiliser *ngFor et *ngIf
    }).compileComponents();

    fixture = TestBed.createComponent(ListeChansonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();  // ✅ Vérifie que le composant est créé
  });

  it('devrait charger les chansons mockées', () => {
    expect(component.chansons.length).toBeGreaterThan(0);  // ✅ Vérifie que les chansons sont chargées
    expect(component.chansons).toEqual(CHANSONS_MOCK);     // ✅ Vérifie si les données sont identiques
  });
});
