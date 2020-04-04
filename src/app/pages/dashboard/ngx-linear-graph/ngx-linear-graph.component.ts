import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LinearGraphData } from './interfaces';

@Component({
  selector: 'ngx-linear-graph',
  templateUrl: './ngx-linear-graph.component.html',
  styleUrls: ['./ngx-linear-graph.component.scss'],
})
export class NgxLinearGraphComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  @Input() data: LinearGraphData[] = [];

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
            axisLine: {
              lineStyle: {
                color: 'transparent',
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
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
          left: 40,
          right: 15,
          top: 40,
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
