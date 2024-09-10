import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPReturnerService {
  url: string = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient) { }

  getDNSIP():Observable<any>{
    return this.http.get(`${this.url}/getDNSIP`);
  }

  getWEB1IP():Observable<any>{
    return this.http.get(`${this.url}/getWEBONEIP`);
  }

  getDBIP():Observable<any>{
    return this.http.get(`${this.url}/getDBIP`);
  }
}
