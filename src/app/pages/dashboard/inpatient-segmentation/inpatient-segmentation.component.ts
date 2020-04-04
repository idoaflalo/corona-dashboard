import { Component } from '@angular/core';
import { PieChartData } from '../pie-chart/interfaces';

@Component({
  selector: 'ngx-inpatient-segmentation',
  templateUrl: './inpatient-segmentation.component.html',
  styleUrls: ['./inpatient-segmentation.component.scss'],
})
export class InpatientSegmentationComponent {
  data: PieChartData[] = [
    {
      name: 'בית חולים',
      value: 890,
    },
    {
      name: 'מלון',
      value: 1352,
    },
    {
      name: 'בית',
      value: 2052,
    },
  ];
}
