import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPassager(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/blog`);
  }



}
