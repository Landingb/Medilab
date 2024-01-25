import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient.model';


/*const htttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}*/

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }
  
  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>('http://google.fr/toto');
  }
}