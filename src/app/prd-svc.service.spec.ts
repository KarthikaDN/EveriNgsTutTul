import { TestBed } from '@angular/core/testing';

import { PrdSvcService } from './prd-svc.service';

describe('PrdSvcService', () => {
  let service: PrdSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
