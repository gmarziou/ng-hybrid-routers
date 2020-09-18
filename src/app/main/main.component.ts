import { Component } from '@angular/core';
import { RouterMonitorService } from '../router-monitor.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    constructor(protected routerMonitorService: RouterMonitorService) {}
}
