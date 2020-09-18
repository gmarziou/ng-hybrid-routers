import { Component, OnInit } from '@angular/core';
import { RouterMonitorService } from '../router-monitor.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private routerMonitorService: RouterMonitorService) {
    routerMonitorService.uiRouted = true;
  }

  ngOnInit(): void {
  }

}
