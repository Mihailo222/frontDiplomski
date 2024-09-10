import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DNSServer } from '../../models/dnsserver';
import { HttpClient } from '@angular/common/http';
import { IPReturnerService } from '../../services/ipreturner.service';
import { DnsserviceService } from '../../services/dnsservice.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor(){}

  ngOnInit(){}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }


 
 

}
