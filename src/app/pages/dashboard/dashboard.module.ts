import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic/doughnut-pie-statistic.component';
import { EpidemiologicGraphComponent } from './epidemiologic-graph/epidemiologic-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { InpatientSegmentationComponent } from './inpatient-segmentation/inpatient-segmentation.component';
import { NgxLinearGraphComponent } from './ngx-linear-graph/ngx-linear-graph.component';
import { ContagionAreasComponent } from './contagion-areas/contagion-areas.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule,
    NbTreeGridModule,
  ],
  declarations: [
    DashboardComponent,
    DoughnutPieStatisticComponent,
    EpidemiologicGraphComponent,
    PieChartComponent,
    InpatientSegmentationComponent,
    NgxLinearGraphComponent,
    ContagionAreasComponent,
  ],
})
export class DashboardModule {}
