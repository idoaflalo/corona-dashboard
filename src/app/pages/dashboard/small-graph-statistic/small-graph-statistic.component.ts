import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EChartOption } from 'echarts';
import { ChartStatisticData } from '../../../@core/data/statistics';

export interface SmallGraphStatisticConfig {
  title: string;
  data: ChartStatisticData<number[]>;
}

@Component({
  selector: 'ngx-small-graph-statistic',
  templateUrl: './small-graph-statistic.component.html',
  styleUrls: ['./small-graph-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallGraphStatisticComponent {
  private _config: SmallGraphStatisticConfig;
  @Input() set config(config: SmallGraphStatisticConfig) {
    this._config = config;
    if (config != null) {
      this.updateChartOption();
    }
  }
  get config() {
    return this._config;
  }

  public chartOption!: EChartOption<EChartOption.SeriesLine>;

  private updateChartOption() {
    const { data } = this.config;
    this.chartOption = {
      color: [data.color],
      grid: {
        top: Math.max(...data.value),
        width: '100%',
        bottom: Math.min(...data.value),
      },
      xAxis: {
        type: 'category',
        data: data.value.map((_amount, i) => i + 1),
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
        scale: true,
      },
      series: [
        {
          name: data.name,
          type: 'line',
          showSymbol: false,
          animation: false,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: data.color,
                },
                {
                  offset: 1,
                  color: 'white',
                },
              ],
            } as any,
          },
          data: data.value,
          smooth: true,
        },
      ],
    };
  }
}
