import { Component } from '@angular/core';
import { Dbserver } from '../models/dbserver';
import { HttpClient } from '@angular/common/http';
import { IPReturnerService } from '../services/ipreturner.service';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-cluster-show-dbs',
  templateUrl: './cluster-show-dbs.component.html',
  styleUrl: './cluster-show-dbs.component.scss'
})
export class ClusterShowDbsComponent {
  dbServer: Dbserver = {
    hostname: '', 
    db_ipa: '', 
    password: '',
    db_user: '',
    db_passwd: '',
  };
  outputDatabases = '';

  formData = {
    hostname: '',
    password: '',
    db_ip: '', 
    db_user: '',
    db_passwd: '',
    db_name: '' 
  };
  constructor(
    private http: HttpClient, 
    private ipService: IPReturnerService, 
    private dbService: DbserviceService
  ) { }

  ngOnInit() {
    this.ipService.getDBIP().subscribe((res) => {
      this.dbServer.db_ipa = res.output; 
    });
  }

  searchDatabases() {
   
    this.dbServer.hostname = this.formData.hostname;
    this.dbServer.password = this.formData.password;
    this.dbServer.db_user = this.formData.db_user;
    this.dbServer.db_passwd = this.formData.db_passwd; 

    
    this.dbService.listDatabases(this.dbServer).subscribe((res) => {
      this.outputDatabases = res.output;
      
    });
   
  }

  closePrompt() {
  

    // Reset formData for show databases and create database forms
    this.formData = {
      hostname: '',
      password: '',
      db_ip: '', 
      db_user: '',
      db_passwd: '',
      db_name: '' 
    };
    this.outputDatabases = '';
  

 
    
  }


}
