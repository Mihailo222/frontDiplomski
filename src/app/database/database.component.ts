import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPReturnerService } from '../services/ipreturner.service';
import { Dbserver } from '../models/dbserver';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'] 
})

export class DatabaseComponent {

  dbServer: Dbserver = {
    hostname: '', 
    db_ipa: '', 
    password: '',
    db_user: '',
    db_passwd: '',
  };

  userDBAssociation = {
    new_user : '',
    new_db : '',
    new_user_pass:'',
    new_user_ip: '',
  };

  isPromptVisible = false;
  promptType: string = '';
  outputDatabases = '';
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

  showPrompt(type: string) {
    this.promptType = type;
    this.isPromptVisible = true;
  }

  closePrompt() {
    this.isPromptVisible = false;

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
    this.outputUsers = '';

    this.userDBAssociation = {
      new_user:'',
      new_db:'',
      new_user_pass:'',
      new_user_ip:'',
    };
    
  }

  searchDatabases() {
    // Sync formData with dbServer
    this.dbServer.hostname = this.formData.hostname;
    this.dbServer.password = this.formData.password;
    this.dbServer.db_user = this.formData.db_user;
    this.dbServer.db_passwd = this.formData.db_passwd; 

    // Call the service to list databases
    this.dbService.listDatabases(this.dbServer).subscribe((res) => {
      this.outputDatabases = res.output;
      // Removed success modal logic
    });
   // this.isPromptVisible = false;
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
    this.isPromptVisible = false;
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

  makeUserDBAssociation(){
//    console.log("INPUT:",this.dbServer,this.userDBAssociation)
    //dbServer: Dbserver, new_user:String, new_db:String,new_user_pass:String,new_user_ip:String)
    
    this.dbServer.hostname = this.formData.hostname;
    this.dbServer.db_ipa = this.formData.db_ip;
    this.dbServer.password = this.formData.password;
    this.dbServer.db_user = this.formData.db_user;
    this.dbServer.db_passwd = this.formData.db_passwd;

    this.dbService.createDBUserAssociation(this.dbServer,this.userDBAssociation.new_user,this.userDBAssociation.new_db,this.userDBAssociation.new_user_pass,
      this.userDBAssociation.new_user_ip).subscribe((res)=>{
        console.log("output:",this.dbServer,this.userDBAssociation)

      });
  }








}
