import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivalInfoComponent } from './festival-info.component';

describe('FestivalInfoComponent', () => {
  let component: FestivalInfoComponent;
  let fixture: ComponentFixture<FestivalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
