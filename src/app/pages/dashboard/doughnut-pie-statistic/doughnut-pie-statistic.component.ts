import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ngx-doughnut-pie-statistic',
  templateUrl: './doughnut-pie-statistic.component.html',
  styleUrls: ['./doughnut-pie-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoughnutPieStatisticComponent {
  public readonly data = [
    { value: 1780, name: 'קל', color: '#4AB988' },
    { value: 1780, name: 'בינוני', color: '#E6B957' },
    { value: 400, name: 'קשה', color: '#FB5377' },
  ];

  public readonly chartOption: EChartOption<EChartOption.SeriesPie> = {
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        label: {
          show: false,
        },
        animation: false,
        data: this.data,
      },
    ],
    color: this.data.map(item => item.color),
  };
}
