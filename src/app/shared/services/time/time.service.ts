import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  timeNow(): string {
    return new Date().getTime().toString();
  }

  timeDiference(subtractTime: string | null): number {
    if (subtractTime) {
      return parseInt(this.timeNow()) - parseInt(subtractTime);
    } else {
      return 0;
    }
  }

  timeValid(expValue: string | null, createdAt: string | null) {
    if(expValue) {
      if (this.timeDiference(createdAt) > parseInt(expValue)) return false;
      return true;
    }
    return false;
  }

}
