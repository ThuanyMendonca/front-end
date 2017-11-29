import { TestBed, inject } from '@angular/core/testing';

import { PartidaDestinoService } from './partida-destino.service';

describe('PartidaDestinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidaDestinoService]
    });
  });

  it('should be created', inject([PartidaDestinoService], (service: PartidaDestinoService) => {
    expect(service).toBeTruthy();
  }));
});
