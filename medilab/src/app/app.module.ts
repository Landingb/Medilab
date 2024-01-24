import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent, 
    PatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, 
    BrowserModule, 
    MatTableModule
  ],
  providers: []
})

export class AppmoduleModule { }