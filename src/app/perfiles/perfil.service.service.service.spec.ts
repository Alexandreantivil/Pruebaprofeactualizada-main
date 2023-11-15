import { TestBed } from '@angular/core/testing';

import { PerfilServiceServiceService } from './perfil.service.service.service';

describe('PerfilServiceServiceService', () => {
  let service: PerfilServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
