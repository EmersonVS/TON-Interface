/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenManagerService } from './token-manager.service';

describe('Service: TokenManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenManagerService]
    });
  });

  it('should ...', inject([TokenManagerService], (service: TokenManagerService) => {
    expect(service).toBeTruthy();
  }));
});
