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
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent,
    RecyleNowComponent
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
        }),
      ],
      forms: {},
    }),
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
