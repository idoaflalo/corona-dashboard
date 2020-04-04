import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ngx-small-statistics-info',
  templateUrl: './small-statistics-info.component.html',
  styleUrls: ['./small-statistics-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallStatisticsInfoComponent {
  @Input() title: string;
  @Input() totalAmount: number;
  @Input() changeType: 'negative' | 'positive';
  @Input() changeSign: 'plus' | 'minus';
  @Input() changeAmount: number;
  @Input() changePercantage: number;

  public get changeSignText() {
    return this.changeSign === 'plus' ? '+' : '-';
  }
}
