import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivalFormComponent } from './festival-form.component';

describe('FestivalFormComponent', () => {
  let component: FestivalFormComponent;
  let fixture: ComponentFixture<FestivalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
