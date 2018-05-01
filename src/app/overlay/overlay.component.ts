import { Component, OnInit } from '@angular/core';
import { Overlay } from '../services/overlay-service';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  public overlay;
  private overlayType;

  constructor(private _overlay: Overlay) { }

  ngOnInit() {
         //this._overlay.activateOverlay(true,'sk-rotating-plane');
    
     this._overlay.ovserlayStatus$.subscribe(
            ovserlayStatus => { 
              //alert(ovserlayStatus);
               this.overlay=ovserlayStatus;
            });

      this._overlay.ovserlayType$.subscribe(
            overlayType => {
               this.overlayType=overlayType;
            });
  }

}
