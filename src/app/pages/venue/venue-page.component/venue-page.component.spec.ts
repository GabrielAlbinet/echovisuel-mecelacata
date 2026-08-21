import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenuePageComponent } from './venue-page.component';

describe('VenuePageComponent', () => {
  let component: VenuePageComponent;
  let fixture: ComponentFixture<VenuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VenuePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
