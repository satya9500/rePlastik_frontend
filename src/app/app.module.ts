import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {
  NbActionsModule,
  NbIconModule,
  NbLayoutModule, NbMenuModule, NbMenuService,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
  NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbUserModule,
    NbMenuModule.forRoot(),
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
