import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    BrowserModule, 
    MatTableModule,
    HttpClientModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppmoduleModule { }