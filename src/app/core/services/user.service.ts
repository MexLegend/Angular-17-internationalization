import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class UserService {
  private _http: HttpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(environment.apiUrlBase);
  }
}
