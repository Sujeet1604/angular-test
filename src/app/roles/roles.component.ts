import { Component, OnInit, ViewChild } from '@angular/core';
import { RolesService } from '../services/roles.service';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Role } from '../services/Role';
import { Users } from '../services/Users';
import { Overlay } from '../services/overlay-service';
import { mockData } from '../data/mock_data';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    public dataSource:any;
    public selection:any;

    public roles: any;
    public users: Users[];
    public roleSelected:any;
    public userRoles: Role[];
 
    displayedColumns = ['NameLast', 'NameFirst', 'weight'];
    pageEvent: PageEvent;
    
     initMyRolesTable(ELEMENT_DATA){     
        this.dataSource.data = ELEMENT_DATA;    
  }

  getUsersByRole(roleId: number) {
    
    this._overlay.activateOverlay(true,'sk-folding-cube');

    setTimeout(() => {this.initMyRolesTable(mockData.ROLE_DATA);;this._overlay.activateOverlay(false,'');},500);

    /*
    this._rolesService.getUsersByRoleId(roleId).subscribe(
        data => { 
            this.initMyRolesTable(data);
            if(data.length==0){this.openSnackBar('No user exist for the selected role','Dismiss')}
         },
        err => console.error(err),
        () => {console.log('Done loading Users');
         this._overlay.activateOverlay(false,'');
        }
    );

    */
}

  getRoleDetails=(role)=>{
    this.roleSelected=role;
    this.getUsersByRole(role.RoleId);
  }

  removeUser=(user)=>{
    this.getRolesByUser(user.UserId);
  };

    constructor(private _rolesService: RolesService, private _overlay: Overlay,public snackBar: MatSnackBar) { 
    }

    @ViewChild(MatSort) sort: MatSort;

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 4000,
        });
      }

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  initSetupTable=()=>{
        this.dataSource = new MatTableDataSource();    
        this.dataSource.sort = this.sort;
  }

    ngOnInit() {      
        setTimeout(() => {this.initSetupTable();},500);

        //this.roles = this.getRoles(); // 1. uncomment this and comment below line
         setTimeout(() => {this.roles=mockData.ROLES;},500);
        
    }

    getRoles() {        
        this._overlay.activateOverlay(true,'sk-folding-cube');
        this._rolesService.getRoles().subscribe(
            data => { this.roles = data },
            err => console.error(err),
            () => {console.log('Done loading Roles'); 
            this._overlay.activateOverlay(false,'');
        }
        );
    }

    validateDelete=(userInfo,userId)=>{
        const selectedRoleID = this.roleSelected.RoleId
        let filteredRoles = userInfo.filter(function(role){
                return role.RoleId!==selectedRoleID;
        });
        this.DeleteUserRoles(userId,filteredRoles)
    };

    getRolesByUser(userId: number) { 
        this._overlay.activateOverlay(true,'sk-folding-cube');
        this._rolesService.getRolesByUserId(userId).subscribe(    
               data => { 
                   this.validateDelete(data,userId);
                },             
      err => console.error(err),             
        () => {console.log('Done loading user roles');
        this._overlay.activateOverlay(false,'');
    }
    );         
    }    

      DeleteUserRoles(userId: number, userRoles) {
        const userRolesIDs = userRoles.map(id => id.RoleId);
        this._overlay.activateOverlay(true,'sk-folding-cube');            
        this._rolesService.DeleteUserRoles(userId, userRolesIDs).subscribe(
             );
             this._overlay.activateOverlay(false,'');
           //setTimeout(() => { this._overlay.activateOverlay(false,'');},500)
            }
     }
