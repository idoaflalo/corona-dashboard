import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public infetedInfoStatisticConfigs = new Array(6).fill(null);
}
