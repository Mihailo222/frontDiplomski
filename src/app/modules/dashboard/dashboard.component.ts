import { Component } from '@angular/core';
import { VirtualmachineService } from '../../services/virtualmachine.service';
import { IPReturnerService } from '../../services/ipreturner.service';
import { VmAnalyzer } from '../../models/vm-analyzer';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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
  wsUser : User={
    hostname:"vagrant",
    ip_address:"192.168.56.11",
    password: "vagrant"
  }
  
  ipAddress: any;

  cpuKillersSorted: any;
  memKillersSorted: any;



  DUAdevice: any;
  DUAfilesystem: any;
  DUAsize: any;
  DUAused: any;
  DUAavailable: any;
  DUAusePercent: any;
  DUAmountedOn: any


  constructor(private vmService:VirtualmachineService, private ipAddrService:IPReturnerService){}

  ngOnInit(){

    this.getWSIP();
   this.fetchLoggedInNow();

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

   this.fetchRootFSUsage();

  }
//**************************METHODS*************************************/
  getDNSIP():void {
    this.ipAddrService.getDNSIP().subscribe(
      (res) => {
        console.log("IP ADDR",res.output)
        this.ipAddress = res.output;
      }
    );
  }
  getWSIP():void {
    this.ipAddrService.getWEB1IP().subscribe(
      (res) => {
        console.log("IP ADDR", res.output);
        this.ipAddress = res.output;

      }
    )
  }

  fetchLoggedInNow():void{
  this.vmService.getLoggedInUsers(this.wsUser).subscribe(
    (res) => {
      console.log(res.output);
      this.vmAnalyzer.usersLoggedIn=res.output;
    }
  );
}

fetchKernelRelease():void{
  this.vmService.getKernelRelease(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.kernelRelease=res.output;
    }
  );
}

fetchKernelVersion():void{
  this.vmService.getKernelVersion(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.kernelVersion=res.output;
    }
  );
}

fetchKernelName():void{
  this.vmService.getKernelName(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.kernelName=res.output;
    }
  );
}

fetchHostname():void{
  this.vmService.getHostname(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.hostname=res.output;
    }
  );
}

fetchMachineHardwareName():void{
  this.vmService.getMachineHardwareName(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.machineHardwareName=res.output;
    }
  );
}



fetchTotalRAM():void{
  this.vmService.getTotalRAM(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.totalRAM=res.output;
    }
  );
}

fetchUsedRAM():void{
  this.vmService.getUsedRAM(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.usedRAM=res.output;
    }
  );
}



fetchFreeRAM():void{
  this.vmService.getFreeRAM(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.freeRAM=res.output;
    }
  );
}



fetchAvailableRAM():void{
  this.vmService.getAvailableRAM(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.availableRAM=res.output;
    }
  );
}


fetchFreeSWAP():void{
  this.vmService.getFreeSWAP(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.freeSWAP=res.output;
    }
  );
}

fetchMemKillers():void{
  this.vmService.getMemoryKillers(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.memoryKillers=res.output;
      //******************************************************** */
     const output = this.vmAnalyzer.memoryKillers; 


 const regex = /(\d+\.\d+)\s+([^ \n]+)/g;
 
 const result: { [key: string]: string }[] = [];
 let match;
 
 
 while ((match = regex.exec(res.output)) !== null) {
 
   result.push({ value: match[1], path: match[2] });
 }
 
 //console.log(result);
 this.memKillersSorted = result;
 //console.log(this.cpuKillersSorted);
 console.log(this.memKillersSorted[1]);
 console.log(this.memKillersSorted[1].path);
 console.log(this.memKillersSorted[1].value);
    }
  );
}


fetchCpuKillers():void{
  this.vmService.getCPUKillers(this.wsUser).subscribe(
    (res) => {
      console.log(res);
      this.vmAnalyzer.cpuKillers=res.output;

//******************************************************** */
 const output = this.vmAnalyzer.cpuKillers; 


const regex = /(\d+\.\d+)\s+([^ \n]+)/g;

const result: { [key: string]: string }[] = [];
let match;


while ((match = regex.exec(res.output)) !== null) {

  result.push({ value: match[1], path: match[2] });
}

//console.log(result);
this.cpuKillersSorted = result;
//console.log(this.cpuKillersSorted);
//console.log(this.cpuKillersSorted[1]);
//console.log(this.cpuKillersSorted[1].path);
//console.log(this.cpuKillersSorted[1].value);
  }
  );

}

fetchRootFSUsage():void {
  this.vmService.getRootDiskUsage(this.wsUser).subscribe(
    (res) => {
      this.vmAnalyzer.diskUsageByRootFS=res.output;
      console.log(res);



      
         // Split the string by whitespace
         const parts = this.vmAnalyzer.diskUsageByRootFS.split(/\s+/);
         
         // Create an object with meaningful keys
         
           this.DUAdevice =  parts[0]
           this.DUAfilesystem = parts[1]
           this.DUAsize = parts[2]
           this.DUAused = parts[3]
           this.DUAavailable= parts[4]
           this.DUAusePercent = parts[5]
           this.DUAmountedOn =  parts[6]
         
    }
  )
}




}
