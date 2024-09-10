import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualmachineService {

  url: string = "http://localhost:8000/api";

  constructor(private http:HttpClient) { }

  //logged in users
  getLoggedInUsers(u:User):Observable<any>{
    return this.http.post(`${this.url}/loggedIn`,u);
  }

  //users logged in recently
  getRecentlyLoggedInUsers(u:User):Observable<any>{
    return this.http.post(`${this.url}/loggedInRecently`,u);
  }

  //CPU and memory utilization:
  getCPUMemoryUsage(u:User):Observable<any>{
    return this.http.post(`${this.url}/cpu_mem_usage`,u);
  }

  //total ram
  getTotalRAM(u:User):Observable<any>{
    return this.http.post(`${this.url}/total_ram`,u);
  }

  //used ram
  getUsedRAM(u:User):Observable<any>{
    return this.http.post(`${this.url}/used_ram`,u);
  }

  //free ram
  getFreeRAM(u:User):Observable<any>{
    return this.http.post(`${this.url}/free_ram`,u);
  }  

  //available ram
  getAvailableRAM(u:User):Observable<any>{
    return this.http.post(`${this.url}/available_ram`,u);
  }

  //free swap
  getFreeSWAP(u:User):Observable<any>{
    return this.http.post(`${this.url}/free_swap`,u);
  }

  //memory killers
  getMemoryKillers(u:User):Observable<any>{
    return this.http.post(`${this.url}/memory_killers`,u);
  }

  //cpu killers
  getCPUKillers(u:User):Observable<any>{
    return this.http.post(`${this.url}/cpu_killers`,u);
  }

  //kernel release
  getKernelRelease(u:User):Observable<any>{
    return this.http.post(`${this.url}/kernel_release`,u);
  }
  
  //kernel version
  getKernelVersion(u:User):Observable<any>{
    return this.http.post(`${this.url}/kernel_version`,u);
  }

  //kernel name
  getKernelName(u:User):Observable<any>{
    return this.http.post(`${this.url}/kernel_name`,u);
  }

  //hostname
  getHostname(u:User):Observable<any>{
    return this.http.post(`${this.url}/hostname`,u);
  }

  //machine hardware name
  getMachineHardwareName(u:User):Observable<any>{
    return this.http.post(`${this.url}/machine_hardware_name`,u);
  }

  //disk usage by root file system
  getRootDiskUsage(u:User):Observable<any>{
    return this.http.post(`${this.url}/disk_usage_by_rootfs`,u);
  }


  //get folder's memory usage
  getFolderMemUsage(u:User, folder_path:String):Observable<any>{
    return this.http.post(`${this.url}/folder_mem_usage`,{
      "hostname":u.hostname,
      "ip_address":u.ip_address,
      "password":u.password,
      "folder_path":folder_path
    });
  }

  getBindHelthCheck(u:User):Observable<any>{
    return this.http.post(`${this.url}/bind9_health_check`,u);
  }





























}
