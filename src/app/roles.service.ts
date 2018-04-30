import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Role } from './Role';
import { Users } from './Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RolesService {

    constructor(private http: HttpClient) { }

    private baseUrl = 'http://localhost:58986/api';
    
    getRoles(): Observable<Role[]> {
        const url = `${this.baseUrl}/roles`;
        return this.http.get<Role[]>(url)
    }

    getUsersByRoleId(roleId: number): Observable<Users[]> {
        const url = `${this.baseUrl}/roles/${roleId}/users`;
        return this.http.get<Users[]>(url).pipe(
        );
      }

      deleteUserRole (id:number): Observable<null> {
        const url = `${this.baseUrl}/roles?id=${id}`;  
       return this.http.delete<null>(url, httpOptions);
      // return this.http.delete<null>(url).pipe();
      }
    
}
