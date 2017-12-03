import { TestBed, inject } from '@angular/core/testing';

import { PassagemsService } from './passagems.service';

describe('PassagemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassagemsService]
    });
  });

  it('should be created', inject([PassagemsService], (service: PassagemsService) => {
    expect(service).toBeTruthy();
  }));
});
