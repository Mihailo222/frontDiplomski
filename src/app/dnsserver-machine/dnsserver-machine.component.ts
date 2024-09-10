import { Component } from '@angular/core';
import { VirtualmachineService } from '../services/virtualmachine.service';
import { VmAnalyzer } from '../models/vm-analyzer';
import { User } from '../models/user';
import { IPReturnerService } from '../services/ipreturner.service';

@Component({
  selector: 'app-dnsserver-machine',
  templateUrl: './dnsserver-machine.component.html',
  styleUrls: ['./dnsserver-machine.component.scss']
})
export class DNSServerMachineComponent {
  vmAnalyzer: VmAnalyzer = {
    usersLoggedIn: '',
    usersLoggedInRecently: '',
    cpuMemoryUsage: '',
    totalRAM: '',
    usedRAM: '',
    freeRAM: '',
    availableRAM: '',
    freeSWAP: '',
    memoryKillers: '',
    cpuKillers: '',
    kernelRelease: '',
    kernelVersion: '',
    kernelName: '',
    hostname: '',
    machineHardwareName: '',
    diskUsageByRootFS: '',
    foldersMemoryUsage: '',
    serviceHealth:'',
  };
  dnsUser : User={
    hostname:"vagrant",
    ip_address:"192.168.56.10",
    password: "vagrant"
  }
  
  ipAddress: any;
  
  constructor(private vmService:VirtualmachineService, private ipAddrService:IPReturnerService){}


  ngOnInit(){

    this.getDNSIP();
   this.fetchLoggedInNow();
   this.fetchLoggedInRecently();

   this.fetchKernelRelease();
   this.fetchKernelVersion();
   this.fetchKernelName();
   this.fetchHostname();
   this.fetchMachineHardwareName();
  
  
   this.fetchTotalRAM();
   this.fetchUsedRAM();
   this.fetchFreeRAM();
   this.fetchAvailableRAM();
  
   this.fetchFreeSWAP();
  
   this.fetchMemKillers();
   this.fetchCpuKillers();

   this.fetchDiskUsageByRoot();
   this.fetchBindStatus();
  }

   
    getDNSIP():void {
      this.ipAddrService.getDNSIP().subscribe(
        (res) => {
          console.log("IP ADDR",res.output)
          this.ipAddress = res.output;
        }
      );
    }




   fetchLoggedInNow():void{
    this.vmService.getLoggedInUsers(this.dnsUser).subscribe(
      (res) => {
        console.log(res.output);
        this.vmAnalyzer.usersLoggedIn=res.output;
      }
    );
  }

  fetchLoggedInRecently():void{
    this.vmService.getRecentlyLoggedInUsers(this.dnsUser).subscribe(
      (res) => {
        console.log(res.output);
        this.vmAnalyzer.usersLoggedInRecently=res.output;
      }
    );
  }


  fetchKernelRelease():void{
    this.vmService.getKernelRelease(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.kernelRelease=res.output;
      }
    );
  }

  fetchKernelVersion():void{
    this.vmService.getKernelVersion(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.kernelVersion=res.output;
      }
    );
  }

  fetchKernelName():void{
    this.vmService.getKernelName(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.kernelName=res.output;
      }
    );
  }

  fetchHostname():void{
    this.vmService.getHostname(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.hostname=res.output;
      }
    );
  }

  fetchMachineHardwareName():void{
    this.vmService.getMachineHardwareName(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.machineHardwareName=res.output;
      }
    );
  }

  fetchTotalRAM():void{
    this.vmService.getTotalRAM(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.totalRAM=res.output;
      }
    );
  }

  fetchUsedRAM():void{
    this.vmService.getUsedRAM(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.usedRAM=res.output;
      }
    );
  }

  

  fetchFreeRAM():void{
    this.vmService.getFreeRAM(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.freeRAM=res.output;
      }
    );
  }



  fetchAvailableRAM():void{
    this.vmService.getAvailableRAM(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.availableRAM=res.output;
      }
    );
  }

  fetchFreeSWAP():void{
    this.vmService.getFreeSWAP(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.freeSWAP=res.output;
      }
    );
  }
  

  fetchMemKillers():void{
    this.vmService.getMemoryKillers(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.memoryKillers=res.output;
      }
    );
  }


  fetchCpuKillers():void{
    this.vmService.getCPUKillers(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.cpuKillers=res.output;
      }
    );
  }

  fetchDiskUsageByRoot():void{
    this.vmService.getRootDiskUsage(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.diskUsageByRootFS=res.output;
      }
    );
  }

  fetchBindStatus():void{
    this.vmService.getBindHelthCheck(this.dnsUser).subscribe(
      (res) => {
        console.log(res);
        this.vmAnalyzer.serviceHealth=res.output;
      }
    );
  }

  







  






}
