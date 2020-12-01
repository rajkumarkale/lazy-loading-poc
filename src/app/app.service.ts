import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public roleSubject = new Subject();

  constructor() {
  }

  updateRole(role: string): void {
    this.roleSubject.next(role);
  }

  getUpdatedRole(): Observable<any> {
    return this.roleSubject.asObservable();
  }
}
