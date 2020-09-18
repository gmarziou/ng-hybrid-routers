import { Component, OnInit } from '@angular/core';
import { RouterMonitorService } from '../router-monitor.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor(private routerMonitorService: RouterMonitorService) {
    routerMonitorService.uiRouted = true;
  }
 
  ngOnInit(): void {
  }

}
