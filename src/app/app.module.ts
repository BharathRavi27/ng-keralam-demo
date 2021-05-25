import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { V1Component } from './drawer/v1/v1.component';
import { V2Component } from './drawer/v2/v2.component';
import { V2DrawerComponent } from './drawer/v2/v2-drawer/v2-drawer.component';
import { V3DrawerComponent } from './drawer/v3/v3-drawer/v3-drawer.component';
import { V3Component } from './drawer/v3/v3.component';
import { V4DrawerComponent } from './drawer/v4/v4-drawer/v4-drawer.component';
import { V4Component } from './drawer/v4/v4.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    V1Component,
    V2Component,
    V2DrawerComponent,
    V3DrawerComponent,
    V3Component,
    V4DrawerComponent,
    V4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
