import { Component, OnInit, Input } from '@angular/core';
import { NbThemeService, NbJSThemeVariable } from '@nebular/theme';

@Component({
  selector: 'ngx-map-legend',
  templateUrl: './map-legend.component.html',
  styleUrls: ['./map-legend.component.scss'],
})
export class MapLegendComponent implements OnInit {
  @Input() set data(data) {
    this.items = this.update(data);
  }
  public items = [];
  private colors: (string | string[] | NbJSThemeVariable)[] = [];

  constructor(private theme: NbThemeService) {}

  async ngOnInit() {
    const variables = (await this.theme.getJsTheme().toPromise()).variables;
    this.colors = [
      variables.primary,
      variables.info,
      variables.success,
      variables.warning,
      variables.danger,
    ];
  }

  private update(data) {
    return data
  }
}
