import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';

import { Category, UIRouter, UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyUiViewComponent } from './empty-ui-view/empty-ui-view.component';
import { EmptyRouterOutletComponent } from './empty-router-outlet/empty-router-outlet.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NewComponent,
    EmptyUiViewComponent,
    EmptyRouterOutletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      config: routerConfigFn,
    }),

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

function routerConfigFn(router: UIRouter) {
  router.trace.enable(Category.TRANSITION);
  //router.plugin(Visualizer);
}