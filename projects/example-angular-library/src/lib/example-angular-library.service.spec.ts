import { TestBed } from '@angular/core/testing';

import { ExampleAngularLibraryService } from './example-angular-library.service';

describe('ExampleAngularLibraryService', () => {
  let service: ExampleAngularLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleAngularLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
