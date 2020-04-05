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
        data: data,
        formatter: (name: string) => {
          const item = data.find((v: PieChartData) => v.name === name);
          return name + ': ' + item.value;
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '50%'],
          data: data,
          top: -50,
          label: {
            formatter: '{c}',
            fontWeight: 'bold',
            fontSize: 15,
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
