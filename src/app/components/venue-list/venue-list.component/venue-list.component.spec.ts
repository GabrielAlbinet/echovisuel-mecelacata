import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenueListComponent } from './venue-list.component';

describe('VenueListComponent', () => {
  let component: VenueListComponent;
  let fixture: ComponentFixture<VenueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VenueListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
