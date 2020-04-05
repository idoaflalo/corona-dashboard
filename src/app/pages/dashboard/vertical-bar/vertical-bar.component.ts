import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EChartOption } from 'echarts';

export interface VerticalBarData {
  label: string;
  left: number;
  right: number;
}

@Component({
  selector: 'ngx-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalBarComponent {
  @Input() leftColor: string;
  @Input() rightColor: string;
  private _data: VerticalBarData[] = [];

  @Input() set data(data: VerticalBarData[]) {
    this._data = data;
    this.updateChartOption();
  }
  get data() {
    return this._data;
  }

  public chartOption?: EChartOption<EChartOption.SeriesBar>;

  public updateChartOption() {
    this.chartOption = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisPointer: {
            show: false,
          },
          axisLabel: {
            formatter: Math.abs,
          },
          splitLine: {
            lineStyle: {
              opacity: 0.5,
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          data: this.data.map(item => item.label),
          nameLocation: 'center',
          splitLine: {
            show: true,
            lineStyle: {
              // type: 'dashed',
              opacity: 0.5,
            },
          },
        },
      ],
      series: [
        {
          name: 'right',
          type: 'bar',
          stack: 'main',
          itemStyle: {
            barBorderRadius: [0, 5, 5, 0],
            color: '#48CAFF',
          },
          barWidth: 8,
          label: {
            show: false,
          },
          data: this.data.map(item => item.right),
        },
        {
          name: 'left',
          type: 'bar',
          stack: 'main',
          itemStyle: {
            barBorderRadius: [5, 0, 0, 5],
            color: '#B6CA51',
          },
          barWidth: 8,
          label: {
            show: false,
            position: 'left',
          },
          data: this.data.map(item => -item.left),
        },
      ],
    };
  }
}
