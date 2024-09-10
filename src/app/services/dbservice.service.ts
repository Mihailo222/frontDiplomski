import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbserver } from '../models/dbserver';
import { Observable } from 'rxjs';
import { hostname } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  url: string = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient) { }


 listDatabases(dbServer:Dbserver):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  return this.http.post(`${this.url}/show_databases`,dbServer, { headers });
 }

 createDatabase(dbServer:Dbserver,db_name:String){
  const headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  return this.http.post(`${this.url}/create_database`,{
    "hostname":dbServer.hostname,
    "db_ipa":dbServer.db_ipa,
    "password":dbServer.password,
    "db_user":dbServer.db_user,
    "db_passwd":dbServer.db_user,
    "db_name":db_name,
  },{headers});
 }

 showDBUsers(dbServer:Dbserver):Observable<any>{

  const headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  return this.http.post(`${this.url}/show_users`,{
    "hostname": dbServer.hostname,
    "db_ipa":dbServer.db_ipa,
    "password":dbServer.password,
    "db_user":dbServer.db_user,
    "db_passwd":dbServer.db_passwd,
  },{headers});
 }

 createDBUserAssociation(dbServer: Dbserver, new_user:String, new_db:String,new_user_pass:String,new_user_ip:String){
  const headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  return this.http.post(`${this.url}/create_db_user_association`,{
    "hostname":dbServer.hostname,
    "db_ipa":dbServer.db_ipa,
    "password": dbServer.password,
    "db_user": dbServer.db_user,
    "db_passwd":dbServer.db_passwd,
    "new_user":new_user,
    "new_db":new_db,
    "new_user_pass":new_user_pass,
    "new_user_ip":new_user_ip
  });
}

getDBIP(){
  return this.http.get(`${this.url}/getDBIP`);
}










}
