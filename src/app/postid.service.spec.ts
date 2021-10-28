import { TestBed } from '@angular/core/testing';

import { PostidService } from './postid.service';

describe('PostidService', () => {
  let service: PostidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
