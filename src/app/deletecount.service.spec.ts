import { TestBed } from '@angular/core/testing';

import { DeletecountService } from './deletecount.service';

describe('DeletecountService', () => {
  let service: DeletecountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
