import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Category, UIRouter, UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';

import { Legacy1Component } from './legacy1/legacy1.component';
import { Legacy2Component } from './legacy2/legacy2.component';

@NgModule({
  declarations: [
    AppComponent,
    Legacy1Component,
    Legacy2Component
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      config: routerConfigFn,
    }),

  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }

function routerConfigFn(router: UIRouter) {
  router.trace.enable(Category.TRANSITION);
  //router.plugin(Visualizer);
}