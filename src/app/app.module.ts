import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {
  NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule,
  NbIconModule, NbInputModule,
  NbLayoutModule, NbListModule, NbMenuModule, NbMenuService, NbSearchModule,
  NbSidebarModule,
  NbSidebarService, NbSpinnerModule, NbStepperModule,
  NbThemeModule, NbToastrModule,
  NbUserModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { RecyleNowComponent } from './recyle-now/recyle-now.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, NbAuthService  } from '@nebular/auth';
import { ShellComponent } from './shell/shell.component';
import {AuthGuard} from './auth.guard';
import { HistoryComponent } from './history/history.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlasticDetailsComponent } from './plastic-details/plastic-details.component';
import { GraphComponent } from './graph/graph.component';
// @ts-ignore
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';


const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent,
    RecyleNowComponent,
    ShellComponent,
    HistoryComponent,
    PlasticDetailsComponent,
    GraphComponent
  ],
  imports: [
    PlotlyModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    HttpClientModule,
    NbContextMenuModule,
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbSearchModule,
    NbListModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'token'
          },
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/api/v1/auth/login',
            method: 'post',
            redirect: {
              success: '/app/home',
              failure: null, // stay on the same page
            },
          },
          register: {
            // ...
            endpoint: '/api/v1/auth/register',
            method: 'post',
            redirect: {
              success: '/app/home',
              failure: null, // stay on the same page
            }
          },
          logout: {
            endpoint: '/api/v1/auth/logout',
            method: 'get',
            redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            }
          },
          resetPass: {
            endpoint: '/api/v1/auth/reset',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
  providers: [NbSidebarService, NbMenuService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
