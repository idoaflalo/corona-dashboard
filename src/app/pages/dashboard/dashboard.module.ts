import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbButtonModule, NbTreeGridModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DoughnutPieStatisticComponent } from './doughnut-pie-statistic/doughnut-pie-statistic.component';
import { EpidemiologicGraphComponent } from './epidemiologic-graph/epidemiologic-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { InpatientSegmentationComponent } from './inpatient-segmentation/inpatient-segmentation.component';
import { NgxLinearGraphComponent } from './ngx-linear-graph/ngx-linear-graph.component';
import { ContagionAreasComponent } from './contagion-areas/contagion-areas.component';
import { CoronaMapComponent } from './corona-map/corona-map.component';
import { SmallStatisticsInfoComponent } from './small-statistics-info/small-statistics-info.component';
import { SmallGraphStatisticComponent } from './small-graph-statistic/small-graph-statistic.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { ExplictCurrentHeightDirective } from './explicit-current-height.directive';
import { InfectedByGenderComponent } from './infected-by-gender/infected-by-gender.component';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbButtonModule,
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
    CoronaMapComponent,
    SmallStatisticsInfoComponent,
    SmallGraphStatisticComponent,
    VerticalBarComponent,
    ExplictCurrentHeightDirective,
    InfectedByGenderComponent,
  ],
})
export class DashboardModule {}
