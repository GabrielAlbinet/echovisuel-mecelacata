import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenueForm } from './venue-form.component';

describe('VenueForm', () => {
  let component: VenueForm;
  let fixture: ComponentFixture<VenueForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueForm],
    }).compileComponents();

    fixture = TestBed.createComponent(VenueForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
