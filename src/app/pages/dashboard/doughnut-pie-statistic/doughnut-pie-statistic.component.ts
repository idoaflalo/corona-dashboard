import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EChartOption } from 'echarts';
import {
  ChartStatisticData,
  ChangeAmountStatisticConfig,
} from '../../../@core/data/statistics';

export interface DoughnutStatsticConfig extends ChangeAmountStatisticConfig {
  data: ChartStatisticData<number>[];
}

@Component({
  selector: 'ngx-doughnut-pie-statistic',
  templateUrl: './doughnut-pie-statistic.component.html',
  styleUrls: ['./doughnut-pie-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoughnutPieStatisticComponent {
  private _config: DoughnutStatsticConfig;
  @Input() set config(config: DoughnutStatsticConfig) {
    this._config = config;
    if (config != null) {
      this.updateTotalAmount();
      this.updateChartOption();
    }
  }
  get config() {
    return this._config;
  }

  public totalAmount!: number;
  public chartOption!: EChartOption<EChartOption.SeriesPie>;

  private updateTotalAmount() {
    this.totalAmount = this.config.data.reduce(
      (acc, item) => acc + item.value,
      0,
    );
  }

  private updateChartOption() {
    const { data } = this.config;
    this.chartOption = {
      series: [
        {
          type: 'pie',
          radius: ['75%', '100%'],
          label: {
            show: false,
          },
          animation: false,
          data: data,
        },
      ],
      color: data.map((item) => item.color),
    };
  }
}
