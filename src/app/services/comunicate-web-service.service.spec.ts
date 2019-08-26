import { TestBed } from '@angular/core/testing';

import { ComunicateWebServiceService } from './comunicate-web-service.service';

describe('ComunicateWebServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicateWebServiceService = TestBed.get(ComunicateWebServiceService);
    expect(service).toBeTruthy();
  });
});
