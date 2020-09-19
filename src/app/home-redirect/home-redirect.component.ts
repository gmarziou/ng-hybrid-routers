import { Component, OnInit } from '@angular/core';
import { UIRouter } from '@uirouter/core';

/**
 * In case we land here via Angular router '/'', we go to ui-router home state
 */
@Component({
  selector: 'app-home-router-outlet',
  template: '',
})
export class HomeRedirectComponent implements OnInit {

  constructor (private uiRouter: UIRouter) {}

  ngOnInit(): void {
    this.uiRouter.stateService.go('home');
  }

}
