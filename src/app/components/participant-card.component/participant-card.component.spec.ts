import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantCardComponent } from './participant-card.component';

describe('ParticipantCardComponent', () => {
  let component: ParticipantCardComponent;
  let fixture: ComponentFixture<ParticipantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
