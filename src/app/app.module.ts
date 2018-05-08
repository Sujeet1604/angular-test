import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//importing angular material
import { MatPaginatorModule,MatSortModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import {MatDialogModule,MatListModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatInputModule,
  MatIconModule, MatCheckboxModule, MatChipsModule,MatGridListModule, MatCardModule, MatProgressSpinnerModule,
 MatStepperModule, MatSidenavModule, MatTabsModule, MatMenuModule, MatToolbarModule,
  MatTooltipModule, MatSnackBarModule} from '@angular/material';



//importing components
import { AppComponent } from './app.component';
import { UsersComponent, NewUserDialog } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AppRoutingModule } from './app-routing.module';
import { RolesService } from './services/roles.service';
import { Overlay } from './services/overlay-service';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    UsersComponent,
    HeaderComponent,
    OverlayComponent,
    NewUserDialog
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,

    MatPaginatorModule,
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
    MatSnackBarModule,
    MatSortModule,
    HttpModule
    ],
    entryComponents: [UsersComponent, NewUserDialog],
    providers: [RolesService, Overlay, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }