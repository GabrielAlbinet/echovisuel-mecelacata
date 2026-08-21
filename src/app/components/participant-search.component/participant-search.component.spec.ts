import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantSearchComponent } from './participant-search.component';

describe('ParticipantSearchComponent', () => {
  let component: ParticipantSearchComponent;
  let fixture: ComponentFixture<ParticipantSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
