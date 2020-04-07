import { Component, OnDestroy, Input } from '@angular/core';
import { registerMap } from 'echarts';
import { NbThemeService, NbJSThemeOptions } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { MapData } from './interfaces';

@Component({
  selector: 'ngx-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
})
export class WorldMapComponent implements OnDestroy {
  public chartOption: any;
  @Input() set data(data: MapData[]) {
    this._data = data;
    if (this.themeConfig) {
      this.updateChartOption();
    }
  }
  get data() {
    return this._data;
  }
  private alive = true;
  private themeConfig: NbJSThemeOptions;
  private _data: MapData[] = [];

  constructor(private theme: NbThemeService, private http: HttpClient) {
    combineLatest([
      this.http.get('assets/map/israelRegions.json'),
      this.theme.getJsTheme(),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([world, config]: [any, NbJSThemeOptions]) => {
        registerMap('world', world);
        this.themeConfig = config;
        if (this.data) {
          this.updateChartOption();
        }
      });
  }

  public updateChartOption() {
    const colors = this.themeConfig.variables;
    const bubbleTheme: any = this.themeConfig.variables.bubbleMap;
    const geoColors = [
      colors.primary,
      colors.info,
      colors.success,
      colors.warning,
      colors.danger,
    ];

    this.chartOption = {
      textStyle: {
        fontFamily: 'Open Sans Hebrew',
      },
      backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#4b5769',
          },
          {
            offset: 1,
            color: '#404a59',
          },
        ],
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          return `${params.name}: ${params.value[2]}`;
        },
      },
      geo: {
        type: 'map',
        map: 'world',
        roam: true,
        label: {
          emphasis: {
            show: false,
          },
        },
        silent: true,
        itemStyle: {
          normal: {
            areaColor: bubbleTheme.areaColor,
            borderColor: bubbleTheme.areaBorderColor,
          },
          emphasis: {
            areaColor: bubbleTheme.areaHoverColor,
          },
        },
        center: [34.879229, 31.559451],
        zoom: 5,
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: (val: number[]) => {
            // console.log(this.data.reduce((pre, cur) => pre + cur.value, 0))
            return val[2] / 100;
          },
          data: this.data.map((item) => {
            return {
              name: item.name,
              value: [...item.coordinates, item.value],
              itemStyle: {
                normal: {
                  color:
                    geoColors[Math.floor(Math.random() * geoColors.length)],
                },
              },
            };
          }),
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
