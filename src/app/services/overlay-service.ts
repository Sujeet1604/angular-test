
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

@Injectable()
export class Overlay {

  // Observable string sources
  private overlay = new Subject<boolean>();
    private overlayType = new Subject<string>();

  // Observable string streams
  ovserlayStatus$ = this.overlay.asObservable();
    ovserlayType$ = this.overlayType.asObservable();

  // Service message commands
  activateOverlay(val,type) {
    this.overlay.next(val);
    if(val){this.overlayType.next(type);}
    else{this.overlayType.next('');}
    
   
  }

}





