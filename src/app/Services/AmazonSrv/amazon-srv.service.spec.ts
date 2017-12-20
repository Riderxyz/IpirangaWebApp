import { TestBed, inject } from '@angular/core/testing';

import { AmazonSrvService } from './amazon-srv.service';

describe('AmazonSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonSrvService]
    });
  });

  it('should be created', inject([AmazonSrvService], (service: AmazonSrvService) => {
    expect(service).toBeTruthy();
  }));
});
