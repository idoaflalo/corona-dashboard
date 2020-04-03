import { NgModule } from "@angular/core";
import { NbCardModule } from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";
import { NgxEchartsModule } from "ngx-echarts";
import { EpidemiologicGraphComponent } from "./epidemiologic-graph/epidemiologic-graph.component";

@NgModule({
  imports: [NbCardModule, ThemeModule, NgxEchartsModule],
  declarations: [DashboardComponent, EpidemiologicGraphComponent]
})
export class DashboardModule {}
