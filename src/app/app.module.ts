import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//importing angular material
import {MatDialogModule,MatListModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatInputModule,
  MatIconModule, MatCheckboxModule, MatChipsModule,MatGridListModule, MatCardModule, MatProgressSpinnerModule, MatStepperModule, MatSidenavModule, MatTabsModule, MatMenuModule, MatToolbarModule,
  MatTooltipModule, MatSnackBarModule} from '@angular/material';

import { MatTableModule } from '@angular/material/table';
//importing components

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AppRoutingModule } from './app-routing.module';
import { RolesService } from './services/roles.service';
import { Overlay } from './services/overlay-service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    HeaderComponent,
    OverlayComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,

    MatMenuModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatGridListModule, 
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatStepperModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule
    ],
    providers: [RolesService, Overlay],
  bootstrap: [AppComponent]
})
export class AppModule { }
