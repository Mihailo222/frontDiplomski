import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DNSServerMachineComponent } from './dnsserver-machine/dnsserver-machine.component';
import { WebServerMachineComponent } from './web-server-machine/web-server-machine.component';
import { MySQLClusterMachineComponent} from './my-sqlcluster-machine/my-sqlcluster-machine.component';
import { ProductsComponent } from './products/products.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { DNSComponent } from './dns/dns.component';
import { ClusterShowDbsComponent } from './cluster-show-dbs/cluster-show-dbs.component';
import { ClusterShowUsersComponent } from './cluster-show-users/cluster-show-users.component';
import { ClusterInsertDbComponent } from './cluster-insert-db/cluster-insert-db.component';

const routes: Routes = [
/*  {path: 'dnsserver',component: DNSServerMachineComponent},
  {path: 'webserver',component: WebServerMachineComponent},
  {path: 'mysqlcluster',component: MySQLClusterMachineComponent},
  {path: 'services', component:ProductsComponent }*/
  
  {path: '',
   component: DefaultComponent,
   children: [{
    path: '',
    component: DashboardComponent
   },{
    path:'dns',
    component: DNSComponent
   },{
    path: 'cluster-show-db',
    component:ClusterShowDbsComponent
   },{
    path:'cluster-show-users',
    component: ClusterShowUsersComponent
   },{
    path:'cluster-insert-db',
    component: ClusterInsertDbComponent
   }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}