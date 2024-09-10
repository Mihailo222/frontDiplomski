import { Component } from '@angular/core';
import { Dbserver } from '../models/dbserver';
import { HttpClient } from '@angular/common/http';
import { IPReturnerService } from '../services/ipreturner.service';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-cluster-insert-db',
  templateUrl: './cluster-insert-db.component.html',
  styleUrl: './cluster-insert-db.component.scss'
})
export class ClusterInsertDbComponent {

  dbServer: Dbserver = {
    hostname: '', 
    db_ipa: '', 
    password: '',
    db_user: '',
    db_passwd: '',
  };

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

  }

  createDatabase() {
    // Implement the logic for creating a database
    this.dbServer.hostname = this.formData.hostname;
    this.dbServer.db_ipa = this.formData.db_ip;
    this.dbServer.password = this.formData.password;
    this.dbServer.db_user = this.formData.db_user;
    this.dbServer.db_passwd = this.formData.db_passwd; 
    const dbName = this.formData.db_name;

    // Call the service to create a database (implement this method in your service)
    this.dbService.createDatabase(this.dbServer, dbName).subscribe((res) => {
      // Handle response from create database service
      console.log('Database created:', res);
    });
   
  }

}
