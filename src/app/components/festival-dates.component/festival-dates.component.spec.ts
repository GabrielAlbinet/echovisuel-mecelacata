import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivalDatesComponent } from './festival-dates.component';

describe('FestivalDatesComponent', () => {
  let component: FestivalDatesComponent;
  let fixture: ComponentFixture<FestivalDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalDatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalDatesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
