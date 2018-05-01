import { Component,Inject,OnInit,ViewContainerRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; 
import {ActivatedRoute,Router} from '@angular/router';

import {mockData} from '../data/mock_data';
import {MatDialog, MatDialogRef} from '@angular/material';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  encapsulation: ViewEncapsulation.None 
})
export class HeaderComponent implements OnInit {


  public sidebar_open: boolean;
 

  mobileQuery: MediaQueryList;
 //fillerNav = Array(10).fill(0).map((_, i) => `BDF Application ${i + 1}`);
   fillerNav: string[] = ["Users","Roles"]

 fillerContent = Array(1).fill(0).map(() =>
     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

 private _mobileQueryListener: () => void;


navigate=(url)=>this.router.navigate([url]);





toggleSidebar(val){
  localStorage.setItem('sidebar',val);
}



 constructor(private route: ActivatedRoute, private router: Router,
 changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public dialog: MatDialog) { 
  
   this.route.params.subscribe(params => {
     console.log(params);
   });
 
   this.mobileQuery = media.matchMedia('(max-width: 600px)');
   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
   this.mobileQuery.removeListener(this._mobileQueryListener);
 }
  
 ngOnInit() {
  this.sidebar_open= localStorage.getItem('sidebar')=='open'?true:false;
}
}


