import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

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
  url: '/about',
  views: {
    'content@': { component: AboutComponent }
  }
};

export const APP_STATES = [
  appState,
 // homeState,
  aboutState
];