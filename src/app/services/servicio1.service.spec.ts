import { TestBed } from '@angular/core/testing';

import { Servicio1Service } from '../services/servicio1.service';

describe('Servicio1Service', () => {
  let service: Servicio1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicio1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
