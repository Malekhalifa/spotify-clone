import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonDetailleeComponent } from './chanson-detaillee.component';

describe('ChansonDetailleeComponent', () => {
  let component: ChansonDetailleeComponent;
  let fixture: ComponentFixture<ChansonDetailleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChansonDetailleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChansonDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
