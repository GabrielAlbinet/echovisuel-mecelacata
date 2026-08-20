import { TestBed } from '@angular/core/testing';
import { VenueServiceTs } from './venue.service.js';

describe('VenueServiceTs', () => {
  let service: VenueServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenueServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
