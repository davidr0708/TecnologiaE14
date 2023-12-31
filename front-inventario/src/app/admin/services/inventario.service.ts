import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

// const test = environment;

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  uri: string = 'http://localhost:3000/inventario';
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-origin': '*'
    })
  }

  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getDispositivos(): Observable<any> {
    return this.http.get<any>(this.uri, this.httpOptions);
  } 
}
