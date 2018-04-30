import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { Observable } from 'rxjs/Rx';
import { Role } from '../Role';
import { Users } from '../Users';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    public RoleTitle = 'Available Roles';
    public RoleUserTitle = 'Users With Role';

    public roles: Role[];
    public users: Users[];
    public id =5;
    public roleId = 1;

    constructor(private _rolesService: RolesService) { 
    }

    ngOnInit() {
        this.getRoles();
        // this.getUsersByRole(this.roleId);
    }

    getRoles() {
        this._rolesService.getRoles().subscribe(
            data => { this.roles = data },
            err => console.error(err),
            () => console.log('Done loading Roles')
        );
    }

    getUsersByRole(roleId: number) {
        this._rolesService.getUsersByRoleId(roleId).subscribe(
            data => { this.users = data },
            err => console.error(err),
            () => console.log('Done loading Users')
        );
    }

    deleteUserFromRole(id: number): void {
        if (confirm("Are you sure you want to delete Role?")){
        this._rolesService.deleteUserRole(this.id).subscribe(
            data => {
             this.getRoles();
             return true;
            },
            error => {
            console.error("Error deleting Role!");
            return Observable.throw(error);
            }
        );
      }
    }
}
