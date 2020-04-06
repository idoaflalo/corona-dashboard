import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { registerMap } from 'echarts';

@Component({
  selector: 'ngx-corona-map',
  templateUrl: './corona-map.component.html',
  styleUrls: ['./corona-map.component.scss'],
})
export class CoronaMapComponent implements OnDestroy {
  options: any;

  private alive = true;

  constructor(private theme: NbThemeService, private http: HttpClient) {
    combineLatest([
      this.http.get('assets/map/world.json'),
      this.http.get('assets/map/israel.json'),
      this.theme.getJsTheme(),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([world, israel, config]: [any, any[], any]) => {
        registerMap('world', world);

        const colors = config.variables;
        const bubbleTheme = config.variables.bubbleMap;
        const geoColors = [
          colors.primary,
          colors.info,
          colors.success,
          colors.warning,
          colors.danger,
        ];

        this.options = {
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
            center: [34.979229, 31.859451],
            zoom: 100,
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              data: israel.map((item) => {
                return {
                  name: item.name,
                  value: [item.coordinates[0], item.coordinates[1], 1],
                  itemStyle: {
                    normal: {
                      color: geoColors[0],
                    },
                  },
                };
              }),
            },
          ],
        };
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
