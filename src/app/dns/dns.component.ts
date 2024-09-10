import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPReturnerService } from '../services/ipreturner.service';
import { DNSServer } from '../models/dnsserver';
import { DnsserviceService } from '../services/dnsservice.service';

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.scss']
})
export class DNSComponent implements OnInit {

  @ViewChild('dnsForm') dnsForm!: NgForm;

  DNSIP: any;
  WEB1IP: any;
  
  DNSServerInstance: DNSServer = {
    dns_ipa: '',
    wp_ipa: '',
    fqdn1: '',
    fqdn2: '',
    ssh_user: '',
    ssh_password: ''
  };

  showModal = false;
  formVisible = true;

  constructor(private http: HttpClient, private ipService: IPReturnerService, private dnsService: DnsserviceService) {}

  ngOnInit() {
    this.ipService.getDNSIP().subscribe((res) => {
      this.DNSIP = res.output;
    });

    this.ipService.getWEB1IP().subscribe((res) => {
      this.WEB1IP = res.output;
    });
  }

  showForm() {
    this.formVisible = true;
  }

  bringDNSUp() {
    this.DNSServerInstance.dns_ipa = this.DNSIP;
    this.DNSServerInstance.wp_ipa = this.WEB1IP;

    this.dnsService.bringDNSUp(this.DNSServerInstance).subscribe(
      () => {
        this.showModal = true;
        this.DNSServerInstance = {
          dns_ipa: '',
          wp_ipa: '',
          fqdn1: '',
          fqdn2: '',
          ssh_user: '',
          ssh_password: ''
        };
      }
    );
  }

  closeModal() {
    this.showModal = false;
    this.formVisible = true;
  }

  closeForm() {
    this.formVisible = true;
    this.DNSServerInstance = {
      dns_ipa: '',
      wp_ipa: '',
      fqdn1: '',
      fqdn2: '',
      ssh_user: '',
      ssh_password: ''
    };
  }
}

