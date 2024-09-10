import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VMAnalysisComponent } from './vmanalysis/vmanalysis.component';
import {  HttpClientModule, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DNSComponent } from './dns/dns.component';
import { MenueComponent } from './menue/menue.component';
import { MaterialModule } from './material/material.module';
import { DNSServerMachineComponent } from './dnsserver-machine/dnsserver-machine.component';
import { WebServerMachineComponent } from './web-server-machine/web-server-machine.component';
import { MySQLClusterMachineComponent } from './my-sqlcluster-machine/my-sqlcluster-machine.component';
import { ProductsComponent } from './products/products.component';
import { DatabaseComponent } from './database/database.component';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ClusterShowDbsComponent } from './cluster-show-dbs/cluster-show-dbs.component';
import { ClusterShowUsersComponent } from './cluster-show-users/cluster-show-users.component';
import { ClusterInsertDbComponent } from './cluster-insert-db/cluster-insert-db.component';








@NgModule({
  declarations: [
    AppComponent,
    VMAnalysisComponent,
    DNSComponent,
    MenueComponent,
    DNSServerMachineComponent,
    WebServerMachineComponent,
    MySQLClusterMachineComponent,
    ProductsComponent,
    DatabaseComponent,
    ClusterShowDbsComponent,
    ClusterShowUsersComponent,
    ClusterInsertDbComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatButtonModule,


    
 //   HighchartsChartModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
