import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DNSServer } from '../models/dnsserver';

@Injectable({
  providedIn: 'root'
})
export class DnsserviceService {

  url: string = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient) { }


  bringDNSUp(dnsServer:DNSServer):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   


    return this.http.post(`${this.url}/dnsUp`,dnsServer, { headers });
  }
}
