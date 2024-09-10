import { TestBed } from '@angular/core/testing';

import { IPReturnerService } from './ipreturner.service';

describe('IPReturnerService', () => {
  let service: IPReturnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPReturnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
