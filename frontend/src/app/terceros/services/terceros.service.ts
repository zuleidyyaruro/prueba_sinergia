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

  public createTercero(modelo: Tercero) {
    return this.http.post<any>(this.apiUrl, modelo);
  }

  public updateTercero(modelo: Tercero, id: number) {
    return this.http.put<any>(this.apiUrl + id + '/', modelo);
  }

  public deleteTercero(id: number) {
    return this.http.delete<any>(this.apiUrl + id);
  }
}
