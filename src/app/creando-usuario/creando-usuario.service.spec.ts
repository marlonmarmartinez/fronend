import { TestBed, inject } from '@angular/core/testing';

import { CreandoUsuarioService } from './creando-usuario.service';

describe('CreandoUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreandoUsuarioService]
    });
  });

  it('should be created', inject([CreandoUsuarioService], (service: CreandoUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
