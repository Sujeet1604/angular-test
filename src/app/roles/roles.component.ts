import { Component, OnInit, ViewChild } from '@angular/core';
import { RolesService } from '../services/roles.service';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
//import {SelectionModel, DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Role } from '../services/Role';
import { Users } from '../services/Users';
import {mockData} from '../data/mock_data';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    public dataSource:any;
    public selection:any;
    
    public RoleTitle = 'Available Roles';
    public RoleUserTitle = 'Users With Role';

    public roles: any;
    public users: Users[];
    public id =5;
    public roleId = 1;
    public pageLength:any;
    public pageSize:any;
    public roleSelected:any;
    

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    pageEvent: PageEvent;
    
     initMyRolesTable(ELEMENT_DATA){
        
         this.pageLength = 5;
        this.pageSize = ELEMENT_DATA.length;
        this.dataSource.data = ELEMENT_DATA;
      
        console.log(this.dataSource);
        
        
        
        
  }


  getRoleDetails=(role)=>{
    this.roleSelected=role;
    //setTimeout(() => { this.initMyRolesTable(mockData.ROLE_DATA);},500);
    this.initMyRolesTable(mockData.ROLE_DATA);
  }

  testPage =()=>{
    console.log(this.dataSource);  
  }


    constructor(private _rolesService: RolesService) { 
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initSetupTable=()=>{
        this.dataSource = new MatTableDataSource();
       
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
  }

    ngOnInit() {
        
        setTimeout(() => {this.initSetupTable();},500);
        
        //this.initMyRolesTable(mockData.ROLE_DATA);
        //this.getRoles();
         this.roles = mockData.ROLES;
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



export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

