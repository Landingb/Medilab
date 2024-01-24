import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from "@angular/router";



export interface PatientElement {
  last_name: string;
  first_name: string;
  date_of_birth: string;
  gender: boolean;
  adress: string;
  phone: string;
}

const ELEMENT_DATA: PatientElement[] = [

  {last_name: 'TestNone', first_name: 'Test', date_of_birth: '1966-12-31', gender: true, adress: "1 Brookside St", phone: '100-222-3333'},
  {last_name: 'TestBordeline', first_name: 'Test', date_of_birth: '1945-06-24', gender: false, adress: "2 High St", phone: '200-333-4444'},
  {last_name: 'TestInDanger', first_name: 'Test', date_of_birth: '2004-06-18', gender: false, adress: "3 Club Road", phone: '300-444-5555'},
  {last_name: 'TestEarlyOnset', first_name: 'Test', date_of_birth: '2002-06-28', gender: true, adress: "4 Valley D", phone: '400-555-6666'}

]


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})


export class PatientComponent implements OnInit{
  patient = ELEMENT_DATA;
  displayedColumns: string[] = ['last_name', 'first_name', 'date_of_birth', 'gender', 'adress', 'phone', 'action'];
  
  last_name!: string;
  first_name!: string;
  date_of_birth!: string;
  gender!: boolean;
  adress!: string;
  phone!: string;


  constructor(private router: Router ) {

  }


  ngOnInit(): void {
  // appeler service 
  ////  this.service.getpatients().subscride(
  // paetients => this.patient = patients;
  }

  verifierDonneesUtilisateur(patient: any) {
    // router.navigate
    console.log(patient);
    this.router.navigate(['/patient/toto']);
  }



}
