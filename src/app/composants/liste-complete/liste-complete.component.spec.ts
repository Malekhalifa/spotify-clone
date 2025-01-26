import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompletComponent } from './liste-complete.component';

describe('ListeCompleteComponent', () => {
  let component: ListeCompletComponent;
  let fixture: ComponentFixture<ListeCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCompletComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListeCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
