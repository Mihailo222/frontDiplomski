import { TestBed } from '@angular/core/testing';

import { DnsserviceService } from './dnsservice.service';

describe('DnsserviceService', () => {
  let service: DnsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
