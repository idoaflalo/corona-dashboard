import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic/doughnut-pie-statistic.component';
import { EpidemiologicGraphComponent } from './epidemiologic-graph/epidemiologic-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    DoughnutPieStatisticComponent,
    EpidemiologicGraphComponent,
    PieChartComponent,
  ],
})
export class DashboardModule {}
