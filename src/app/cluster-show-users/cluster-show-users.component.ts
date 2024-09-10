import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPReturnerService } from '../services/ipreturner.service';
import { DbserviceService } from '../services/dbservice.service';
import { Dbserver } from '../models/dbserver';

@Component({
  selector: 'app-cluster-show-users',
  templateUrl: './cluster-show-users.component.html',
  styleUrl: './cluster-show-users.component.scss'
})
export class ClusterShowUsersComponent implements OnInit {
  dbServer: Dbserver = {
    hostname: '', 
    db_ipa: '', 
    password: '',
    db_user: '',
    db_passwd: '',
  };


  outputUsers = '';

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
   
    this.formData = {
      hostname: '',
      password: '',
      db_ip: '', 
      db_user: '',
      db_passwd: '',
      db_name: '' 
    };

    this.outputUsers = '';

    
  }


  showDatabaseUsers(){
    this.dbServer.hostname = this.formData.hostname;
    this.dbServer.db_ipa = this.formData.db_ip;
    this.dbServer.password = this.formData.password;
    this.dbServer.db_user = this.formData.db_user;
    this.dbServer.db_passwd = this.formData.db_passwd;

    console.log("INPUTS:",this.dbServer)

    this.dbService.showDBUsers(this.dbServer).subscribe((res) => {
      this.outputUsers = res.output;
      console.log('Users: ',res);
    });
  }

}
