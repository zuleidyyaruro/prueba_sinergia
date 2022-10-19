import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tercero } from '../interfaces/terceros.interface';

@Injectable({
  providedIn: 'root'
})
export class TercerosService {

  private apiUrl: string = 'http://localhost:8000/api/terceros/';

  constructor(private http: HttpClient) { }

  public getTerceros(): Observable<Tercero[]> {
    return this.http.get<Tercero[]>(this.apiUrl);
  }
}
