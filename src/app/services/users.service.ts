import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Users } from './Users';
import { Role } from './Role';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
 })
};

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}
    private baseUrl = environment.baseUrl;

    searchUsers(username): Observable<Users> {
      const url = `${this.baseUrl}/usersearch`;
      return this.http.get<Users>(url)
  }

  checkUser(username): Observable<Users> {
    const url = `${this.baseUrl}/user/${username}`;
    return this.http.get<Users>(url)
}

  SaveUser(user): Observable<null> {
    const url = `${this.baseUrl}/users`; 
   return this.http.post<null>(url,user, httpOptions).pipe(
   );
  }

  getUserRoles(userId: number): Observable<Role[]> {
    const url = `${this.baseUrl}/users/${userId}/roles`;
    return this.http.get<Role[]>(url)
}

}
