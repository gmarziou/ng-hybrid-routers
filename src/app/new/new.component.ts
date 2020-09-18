import { Component, OnInit } from '@angular/core';
import { RouterMonitorService } from '../router-monitor.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {

  constructor(private routerMonitorService: RouterMonitorService) {
    routerMonitorService.uiRouted = false;
  }

  ngOnInit(): void {
  }

}
