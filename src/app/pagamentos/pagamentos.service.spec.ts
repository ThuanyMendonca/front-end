import { TestBed, inject } from '@angular/core/testing';

import { PagamentosService } from './pagamentos.service';

describe('PagamentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagamentosService]
    });
  });

  it('should be created', inject([PagamentosService], (service: PagamentosService) => {
    expect(service).toBeTruthy();
  }));
});
