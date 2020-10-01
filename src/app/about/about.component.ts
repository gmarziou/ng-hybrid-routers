import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  id: string;

  constructor(private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.id = this.stateService.params['id'];
  }

}
