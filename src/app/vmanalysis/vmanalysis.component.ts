import { Component } from '@angular/core';
import { VMAnalysisService } from '../services/vmanalysis.service';
import { VM } from '../models/vm';

@Component({
  selector: 'app-vmanalysis',
  templateUrl: './vmanalysis.component.html',
  styleUrl: './vmanalysis.component.scss'
})
export class VMAnalysisComponent {
  vm: VM = {
    hostname: '',
    ip_address: '',
    password: ''
  };
  output:string =  '';

  constructor(private vmAnalysisService:VMAnalysisService){}



  onSubmit(){

    this.vmAnalysisService.getSysInfo(this.vm).subscribe(
      (res) => {
        console.log(res);
        this.output = res.output;
      },
    );
  }
}







