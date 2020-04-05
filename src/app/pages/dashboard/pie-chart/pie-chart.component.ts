import { Component, Input, AfterViewInit } from '@angular/core';
import { PieChartData } from './interfaces';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements AfterViewInit {
  @Input() data: PieChartData[] = [];
  public options: any = {};

  ngAfterViewInit() {
    this.options = {
      textStyle: {
        fontFamily: 'Open Sans Hebrew',
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: this.data,
        formatter: (name: string) => {
          const item = this.data.find((v: PieChartData) => v.name === name);
          return name + ': ' + item.value;
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          data: this.data,
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
  }

  get sum() {
    return this.data.reduce((pre, cur) => pre + cur.value, 0);
  }
}
