import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VM } from '../models/vm';

@Injectable({
  providedIn: 'root'
})
export class VMAnalysisService {

  url: string = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient) { }

  getSysInfo(vm:VM):Observable<any>{
    return this.http.post(`${this.url}/sysinfo`,vm);
  }

}


