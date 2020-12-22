import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {RecyleNowComponent} from './recyle-now/recyle-now.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'recycle', component: RecyleNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
