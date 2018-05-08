import { Component, OnInit, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Overlay } from '../services/overlay-service';
import { UsersService } from '../services/users.service';
import { Users } from '../services/Users';
import { Role } from '../services/Role';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { mockData } from '../data/mock_data';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public roles: any;
  public users: any;
  public userInfo: any;
  public userToFind:any;
  public invalidUser: boolean; 
  public userStatus: any;

  findUser=(user)=>{
    if(user=="sam"){
      this.openDialog();
    }
    else if(user){ 
      alert("found "+ user);
      this.userInfo=mockData.user_details[0];
      this.roles=mockData.user_roles;
    }
    else{
      this.openSnackBar('Invalid User Name','Dismiss');
      this.userInfo="";
    }
   
  };



  openDialog(): void {
    let dialogRef = this.dialog.open(NewUserDialog, {
      width: '250px',
      disableClose: true,
      data: { name: this.userToFind }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      console.log('The dialog was closed');
      this.openSnackBar('Added '+result+' as user','Dismiss');
      this.userToFind="";
       this.userInfo=mockData.user_details[0];
      //this.userToFind = result;

      }
    });
  }

  constructor(private _usersService: UsersService,
  public snackBar: MatSnackBar, private _overlay: Overlay, private dialog: MatDialog) { }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 4000,
        });
      }


  ngOnInit() {
    this.userStatus="Active";
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: { }
  //   });
  // }

  getUserRole(users) {        
    this._overlay.activateOverlay(true,'sk-folding-cube');
    this._usersService.getUserRoles(users.UserId).subscribe(
        data => { this.roles = data },
        err => console.error(err),
        () => {console.log('Done loading user role'); 
        this._overlay.activateOverlay(false,'');
    }
    );
}

getUsers(username:string) {        
  this._overlay.activateOverlay(true,'sk-folding-cube');
  this._usersService.searchUsers(username).subscribe(
      data => { this.users= data },
      err => console.error(err),
      () => {console.log('Done checking user'); 
      this._overlay.activateOverlay(false,'');
  }
  );
}

checkUserExist(username: string){
  this._overlay.activateOverlay(true,'sk-folding-cube');
  this._usersService.checkUser(username).subscribe(
      data => { this.userInfo= data },
      err => console.error(err),
      () => {console.log('Done checking user exist'); 
      this._overlay.activateOverlay(false,'');
  }
  );
}

SaveUsers(userInfo) {
  this._overlay.activateOverlay(true,'sk-folding-cube');            
  this._usersService.SaveUser(this.users).subscribe(
       );
       this._overlay.activateOverlay(false,'');
      }

}


@Component({
  selector: 'user-dialog',
  templateUrl: 'new-user-dialog.html',
})
export class NewUserDialog {

  constructor(
    public dialogRef: MatDialogRef<NewUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}