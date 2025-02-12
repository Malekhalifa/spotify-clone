import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistChansonsComponent } from './artist-chansons.component';

describe('ArtistChansonsComponent', () => {
  let component: ArtistChansonsComponent;
  let fixture: ComponentFixture<ArtistChansonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistChansonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistChansonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
