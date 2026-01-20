import { TestBed } from '@angular/core/testing';

import { Enrollmentservice } from './enrollmentservice';

describe('Enrollmentservice', () => {
  let service: Enrollmentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enrollmentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
