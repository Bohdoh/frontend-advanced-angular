import { TestBed } from '@angular/core/testing';

import { LakeAnimalService } from './lake-animal.service';

describe('LakeAnimalService', () => {
  let service: LakeAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LakeAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
