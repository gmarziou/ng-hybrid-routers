import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  origin: string;

  constructor(private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.origin = this.stateService.params['origin'];
  }

}
