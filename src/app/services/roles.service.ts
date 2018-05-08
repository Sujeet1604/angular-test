import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Role } from './Role';
import { Users } from './Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http'
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
 })
};

@Injectable()
export class RolesService {

    // private headers: any;
    // private options: any;
    // body: any;

    constructor(private http: HttpClient, private _httpService: Http) {
        // this.headers = new Headers({'Content-Type':'application/json'});
        // this.options = new RequestOptions({headers : this.headers});
     }

     private baseUrl = environment.baseUrl;
    
    getRoles(): Observable<Role[]> {
        const url = `${this.baseUrl}/roles`;
        return this.http.get<Role[]>(url)
    }

    getUsersByRoleId(roleId: number): Observable<Users[]> {
        const url = `${this.baseUrl}/roles/${roleId}/users`;
        return this.http.get<Users[]>(url).pipe(
        );
      }

    getRolesByUserId(userId: number): Observable<Role[]> {
        const url = `${this.baseUrl}/users/${userId}/roles`;
        return this.http.get<Role[]>(url).pipe(
        );
      }

    DeleteUserRoles (userId:number, roleIds): Observable<null> {
        //this.body = roleIds;
        const url = `${this.baseUrl}/users/${userId}/roles`; 
       return this.http.put<null>(url, roleIds, httpOptions).pipe(
       );
      }

    // DeleteUserRoles=(userId:number, roleIds)=>{
    //     this.body= roleIds;
    //     const url = this.baseUrl+'/users/'+userId+'/roles'; 
    //     return this._httpService.put(url, this.body, this.options).
    //     map( res => console.log(res));
    // }

    
}