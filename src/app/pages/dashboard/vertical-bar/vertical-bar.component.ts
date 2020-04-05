import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EChartOption } from 'echarts';

const steps = [0, 18, 30, 42, 55, 67];
const yAxisData = steps.map((step, i, arr) => (
  i === arr.length - 1
    ? `+${step}`
    : `${step + (i === 0 ? 0 : 1)}-${steps[i + 1]}`
));

@Component({
  selector: 'ngx-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalBarComponent {
  @Input() leftColor: string;
  @Input() rightColor: string;
  @Input() data: Array<{ left: number; right: number }>;

  public chartOption: EChartOption<EChartOption.SeriesBar> = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['נשים', 'גברים'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        data: yAxisData,
      },
    ],
    series: [
      {
        name: 'male',
        type: 'bar',
        stack: 'main',
        itemStyle: {
          barBorderRadius: [0, 5, 5, 0],
        },
        barWidth: 8,
        label: {
          show: false,
        },
        data: [320, 302, 341, 374, 390, 450, 420],
      },
      {
        name: 'female',
        type: 'bar',
        stack: 'main',
        itemStyle: {
          barBorderRadius: [5, 0, 0, 5],
        },
        barWidth: 8,
        label: {
          show: false,
          position: 'left',
        },
        data: [-120, -132, -101, -134, -190, -230, -210],
      },
    ],
  };
}
