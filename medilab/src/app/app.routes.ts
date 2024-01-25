import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'patient', pathMatch: 'full' },
    { path:'patient', component: PatientComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent]
})
export class AppRoutingModule {}