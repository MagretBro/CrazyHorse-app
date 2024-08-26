import { TestBed } from '@angular/core/testing';

import { RocksectorService } from './rocksector.service';

describe('RocksectorService', () => {
  let service: RocksectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocksectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
