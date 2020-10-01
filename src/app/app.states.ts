import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmptyUiViewComponent } from './empty-ui-view/empty-ui-view.component';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  abstract: true,
  name: 'app',
  views: {
    'navbar@': { component: NavbarComponent }
  },
};

export const homeState = {
  parent: 'app',
  name: 'home',
  url: '/',
  views: {
    'content@': { component: HomeComponent }
  }
};

export const aboutState = {
  parent: 'app',
  name: 'about',
  url: '/about/:origin',
  views: {
    'content@': { component: AboutComponent }
  }
};

/**
 * Empty ui-view for state equivalent to an Angualr route.
 */
export const newState = {
  parent: 'app',
  name: 'new',
  url: '/new/:origin',
  views: {
    'content@': { component: EmptyUiViewComponent}
  }
};


/**
 * For unknown paths (probably Angular routes), we display an empty ui-view
 *
 * This is our catch-all state. 
 */
export const catchAllState = {
  parent: 'app',
  name: 'unknown',
  url: '/**',
  views: {
    'content@': { component: EmptyUiViewComponent}
  }
};

export const APP_STATES = [
  appState,
  homeState,
  aboutState,
  newState,
  catchAllState
];