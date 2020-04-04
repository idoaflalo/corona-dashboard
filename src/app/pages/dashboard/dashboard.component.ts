import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public infetedInfoStatisticConfigs = [
    {
      title: 'מאושפזים',
      data: [
        { value: 1780, name: 'בית חולים', color: '#1C7D7E' },
        { value: 1780, name: 'בית', color: '#B6CA51' },
        { value: 400, name: 'קשה', color: '#48CAFF' },
      ],
    },
    ...new Array(4).fill(null).map(() => ({
      title: 'סה"כ נדבקים',
      data: [
        { value: 1780, name: 'קל', color: '#4AB988' },
        { value: 1780, name: 'בינוני', color: '#E6B957' },
        { value: 400, name: 'קשה', color: '#FB5377' },
      ],
    })),
  ];
}
