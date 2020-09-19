import { Component, OnInit } from '@angular/core';

/**
 * As I did not find a way to hide router-outlet, I use a component with an empty template.
 */
@Component({
  selector: 'app-empty-router-outlet',
  template: '',
})
export class EmptyRouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
