import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Airline } from '../models/Response/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  getAirlineDetail(): Observable<Airline[]> {
    return this.http.get<Airline[]>(`${environment.baseUrl}/airlines`)
  }


}
