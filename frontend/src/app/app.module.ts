import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VehiclesComponent} from './vehicle/vehicles.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {AddComponent} from './vehicle/add/add.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import { VehiclePreviewDialogComponent } from './vehicle-preview-dialog/vehicle-preview-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclePreviewDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    VehiclesComponent,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    AddComponent,
    MatButtonModule,

  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
