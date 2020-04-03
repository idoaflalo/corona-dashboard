import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ngx-doughnut-pie-statistic',
  templateUrl: './doughnut-pie-statistic.component.html',
  styleUrls: ['./doughnut-pie-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoughnutPieStatisticComponent {
  public readonly chartOption = {
    series: [
      {
        type: 'pie',
        radius: ['70%', '100%'],
        label: {
          show: false,
        },
        animation: false,
        data: [
          { value: 1780 },
          { value: 1780 },
          { value: 400 },
        ],
      } as EChartOption.SeriesPie,
    ],
  };
}
