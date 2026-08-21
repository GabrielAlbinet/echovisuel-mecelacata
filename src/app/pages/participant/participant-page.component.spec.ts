import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantPageComponent } from './participant-page.component';

describe('ParticipantPageComponent', () => {
  let component: ParticipantPageComponent;
  let fixture: ComponentFixture<ParticipantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
