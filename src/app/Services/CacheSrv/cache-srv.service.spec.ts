import { TestBed, inject } from '@angular/core/testing';

import { CacheSrvService } from './cache-srv.service';

describe('CacheSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheSrvService]
    });
  });

  it('should be created', inject([CacheSrvService], (service: CacheSrvService) => {
    expect(service).toBeTruthy();
  }));
});
