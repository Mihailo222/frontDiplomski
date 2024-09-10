import { TestBed } from '@angular/core/testing';

import { VMAnalysisService } from './vmanalysis.service';

describe('VMAnalysisService', () => {
  let service: VMAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VMAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
