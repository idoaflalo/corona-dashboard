import { Component, Input } from '@angular/core';
import { PieChartData } from './interfaces';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  @Input() set data(value: PieChartData[]) {
    this._data = value;
    this.initializeData(value);
  }
  get data() {
    return this._data;
  }
  public options: EChartOption<EChartOption.SeriesPie> = {};
  public sum: number = 0;
  private _data: PieChartData[] = [];

  private initializeData(data: PieChartData[]) {
    this.options = {
      textStyle: {
        fontFamily: 'Open Sans Hebrew',
      },
      legend: {
        left: 'center',
        top: 'bottom',
        icon: 'circle',
        data: data,
        align: 'right',
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '60%'],
          data: data,
          center: ['50%', '40%'],
          label: {
            formatter: '{c}',
            fontWeight: 'bold',
            fontSize: 14,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    this.sum = data.reduce((pre, cur) => pre + cur.value, 0);
  }
}
