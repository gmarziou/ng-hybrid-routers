import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouterOutletComponent } from './empty-router-outlet/empty-router-outlet.component';
import { HomeRedirectComponent } from './home-redirect/home-redirect.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeRedirectComponent},
  {path: 'new/:origin', component: NewComponent},
  // all unknown routes (probably ui-router ones) are mapped to an empty template to emlpty router-outlet
  {path: '**', component: EmptyRouterOutletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
