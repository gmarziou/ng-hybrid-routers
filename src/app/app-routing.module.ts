import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouterOutletComponent } from './empty-router-outlet/empty-router-outlet.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: 'new', component: NewComponent},
  {path: 'about', component: EmptyRouterOutletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
