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
    { value: 1780, label: 'קל' },
    { value: 1780, label: 'בינוני' },
    { value: 400, label: 'קשה' },
  ];
  public readonly chartOption = {
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        label: {
          show: false,
        },
        animation: false,
        data: this.data,
      } as EChartOption.SeriesPie,
    ],
  };
}
