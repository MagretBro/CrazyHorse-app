import { TestBed } from '@angular/core/testing';

import { ClimbingRouteService } from './climbing-route.service';

describe('ClimbingRouteService', () => {
  let service: ClimbingRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbingRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
