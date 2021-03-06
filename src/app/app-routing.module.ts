import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {RecyleNowComponent} from './recyle-now/recyle-now.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {ShellComponent} from './shell/shell.component';
import {AuthGuard} from './auth.guard';
import {HistoryComponent} from './history/history.component';
import {GraphComponent} from './graph/graph.component';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {path: 'home', component: HomepageComponent},
      {path: 'recycle', component: RecyleNowComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'report', component: GraphComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'app/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
