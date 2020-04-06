import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LinearGraphData } from './interfaces';

@Component({
  selector: 'ngx-linear-graph',
  templateUrl: './ngx-linear-graph.component.html',
  styleUrls: ['./ngx-linear-graph.component.scss'],
})
export class NgxLinearGraphComponent implements AfterViewInit, OnDestroy {
  @Input() data: LinearGraphData[] = [];
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const echarts: any = config.variables.echarts;

      this.options = {
        textStyle: {
          fontFamily: 'Open Sans Hebrew',
        },
        backgroundColor: echarts.bg,
        color: ['#5DC9FE'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.data.map((v) => v.name),
            axisTick: {
              alignWithLabel: true,
            },
            name: this.xAxisLabel,
            nameLocation: 'middle',
            nameGap: 30,
            nameTextStyle: {
              color: '#8e9193',
              fontSize: 14,
            },
            axisLine: {
              lineStyle: {
                color: 'transparent',
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: this.yAxisLabel,
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
              color: '#8e9193',
              fontSize: 14,
            },
            axisLine: {
              lineStyle: {
                color: 'transparent',
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: 70,
          right: 15,
          top: 20,
          bootom: 0,
        },
        series: [
          {
            name: 'מקרים',
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
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
                    color: '#5DC8FE',
                  },
                  {
                    offset: 1,
                    color: '#E5FAFD',
                  },
                ],
              },
            },
            data: this.data.map((v) => v.value),
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
