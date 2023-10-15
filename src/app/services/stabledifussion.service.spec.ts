import { TestBed } from '@angular/core/testing';

import { StabledifussionService } from './stabledifussion.service';

describe('StabledifussionService', () => {
  let service: StabledifussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StabledifussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
