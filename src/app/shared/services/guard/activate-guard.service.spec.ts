/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivateGuardService } from './activate-guard.service';

describe('Service: ActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateGuardService]
    });
  });

  it('should ...', inject([ActivateGuardService], (service: ActivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
