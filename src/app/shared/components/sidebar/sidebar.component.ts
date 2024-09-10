import { Component, OnInit, ViewChild } from '@angular/core';
import { DNSServer } from '../../../models/dnsserver';
import { HttpClient } from '@angular/common/http';
import { IPReturnerService } from '../../../services/ipreturner.service';
import { DnsserviceService } from '../../../services/dnsservice.service';
import { NgForm } from '@angular/forms';






@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
