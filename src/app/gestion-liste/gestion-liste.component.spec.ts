import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionListeComponent } from './gestion-liste.component';

describe('GestionListeComponent', () => {
  let component: GestionListeComponent;
  let fixture: ComponentFixture<GestionListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
