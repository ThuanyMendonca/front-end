import { TestBed, inject } from '@angular/core/testing';

import { CobradorsService } from './cobradors.service';

describe('CobradorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CobradorsService]
    });
  });

  it('should be created', inject([CobradorsService], (service: CobradorsService) => {
    expect(service).toBeTruthy();
  }));
});
