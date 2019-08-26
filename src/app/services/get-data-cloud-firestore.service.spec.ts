import { TestBed } from '@angular/core/testing';

import { GetDataCloudFirestoreService } from './get-data-cloud-firestore.service';

describe('GetDataCloudFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDataCloudFirestoreService = TestBed.get(GetDataCloudFirestoreService);
    expect(service).toBeTruthy();
  });
});
