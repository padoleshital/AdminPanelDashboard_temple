import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  constructor(private http: HttpClient) { }

  getPassager(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/passenger`)
  }

  // getAirLineId(airlineId: any): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/passenger`)
  // }

  post_passenger(data: any) {
    return this.http.post<any>(`${environment.baseUrl}/passenger`, data)
  }



}
