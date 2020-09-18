import { AppComponent } from './app.component';
import { Legacy1Component } from './legacy1/legacy1.component';
import { Legacy2Component } from './legacy2/legacy2.component';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  //redirectTo: 'legacy1',
  component: AppComponent,
};

export const legacy1State = {
  parent: 'app',
  name: 'legacy1',
  url: '/legacy1',
  component: Legacy1Component,
};

export const legacy2State = {
  parent: 'app',
  name: 'legacy2',
  url: '/legacy2',
  component: Legacy2Component,
};

export const APP_STATES = [
  appState,
  legacy1State,
  legacy2State
];