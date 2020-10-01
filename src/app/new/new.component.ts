import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  origin: string;
  sub: any;

  constructor(private router: Router, private stateService: StateService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.origin = params['origin'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // example of programmatically navigating to UI-Router state
  goToAbout(): void {
    this.stateService.go('about', { origin: 'button (New)' }, { reload: true });
    this.router.navigate(['/about']);
  }

}
