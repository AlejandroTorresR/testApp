import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerPinturas(): Observable <any> {
    const url = 'assets/pinturas.json';
    return this.http.get(url);
  }

}
