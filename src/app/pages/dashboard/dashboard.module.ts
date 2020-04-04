import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic/doughnut-pie-statistic.component';
import { SmallStatisticsInfoComponent } from './small-statistics-info/small-statistics-info.component';
import { SmallGraphStatisticComponent } from './small-graph-statistic/small-graph-statistic.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    DoughnutPieStatisticComponent,
    SmallStatisticsInfoComponent,
    SmallGraphStatisticComponent,
  ],
})
export class DashboardModule { }
