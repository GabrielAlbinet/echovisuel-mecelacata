import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistFormComponent } from './artist-form.component';

describe('ArtistFormComponent', () => {
  let component: ArtistFormComponent;
  let fixture: ComponentFixture<ArtistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
