import { TestBed, inject } from '@angular/core/testing';

import { CidadesService } from './cidades.service';

describe('CidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CidadesService]
    });
  });

  it('should be created', inject([CidadesService], (service: CidadesService) => {
    expect(service).toBeTruthy();
  }));
});
