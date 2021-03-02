import { TestBed } from '@angular/core/testing';

import { MyservicenameService } from './myservicename.service';

describe('MyservicenameService', () => {
  let service: MyservicenameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservicenameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
