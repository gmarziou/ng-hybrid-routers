import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private stateService: StateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  // example of navigation to a UI-Router state
  goToAbout(): void {
    this.stateService.go('about', { origin: 'button (Home)'}, { reload: true });
  }

  // example of navigation to an Angular route
  goToNew(): void {
      this.stateService.go('new', { origin: 'button (Home)' });
      this.router.navigate(['/new', 'button (Home)']);
    }
}
