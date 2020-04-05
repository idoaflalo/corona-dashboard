import { Component, Input, AfterViewInit } from '@angular/core';
import { PieChartData } from './interfaces';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  @Input() set data(value: PieChartData[]) {
    this.options = {
      textStyle: {
        fontFamily: 'Open Sans Hebrew',
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: value,
        formatter: (name: string) => {
          const item = value.find((v: PieChartData) => v.name === name);
          return name + ': ' + item.value;
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          data: value,
          label: {
            formatter: '{c}',
            fontWeight: 'bold',
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
    this.sum = value.reduce((pre, cur) => pre + cur.value, 0);
  }
  get data() {
    return this._data;
  }
  public options: any = {};
  public sum: number = 0;
  private _data: PieChartData[] = [];
}
