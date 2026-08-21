import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivalPageComponent } from './festival-page.component';

describe('FestivalPageComponent', () => {
  let component: FestivalPageComponent;
  let fixture: ComponentFixture<FestivalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
