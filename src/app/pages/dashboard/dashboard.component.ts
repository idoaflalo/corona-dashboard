import { Component } from '@angular/core';
import { DoughnutStatsticConfig } from './doughnut-pie-statistic/doughnut-pie-statistic.component';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public infetedInfoStatisticConfigs: DoughnutStatsticConfig[] = [
    {
      title: 'מאושפזים',
      changeAmount: 1,
      changePercantage: 2.5,
      data: [
        { value: 1780, name: 'בית חולים', color: '#1C7D7E' },
        { value: 1780, name: 'בית', color: '#B6CA51' },
        { value: 400, name: 'קשה', color: '#48CAFF' },
      ],
    },
    ...new Array(4).fill(null).map((_, i) => ({
      title: 'סה"כ נדבקים',
      changeAmount: i * 2 + 10,
      changePercantage: +(10 / (i + 1)).toFixed(1).replace(/\.0$/, ''),
      data: [
        { value: 1780, name: 'קל', color: '#4AB988' },
        { value: 1780, name: 'בינוני', color: '#E6B957' },
        { value: 400, name: 'קשה', color: '#FB5377' },
      ],
    })),
  ];
}
