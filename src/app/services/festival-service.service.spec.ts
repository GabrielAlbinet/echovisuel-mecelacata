import { TestBed } from '@angular/core/testing';
import { FestivalServiceService } from './festival-service.service';

describe('FestivalServiceService', () => {
  let service: FestivalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
