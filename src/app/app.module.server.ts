import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    DefaultModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}