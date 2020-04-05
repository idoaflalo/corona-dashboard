import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VerticalBarData } from '../vertical-bar/vertical-bar.component';

const ages = [0, 18, 30, 42, 55, 67];
const ageSections = ages.map((step, i, arr) =>
  i === arr.length - 1
    ? `+${step}`
    : `${step + (i === 0 ? 0 : 1)}-${ages[i + 1]}`,
);

@Component({
  selector: 'ngx-infected-by-gender',
  templateUrl: './infected-by-gender.component.html',
  styleUrls: ['./infected-by-gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfectedByGenderComponent {
  public readonly data = [
    {male: 800, female: 50},
    {male: 10000, female: 600},
    {male: 3000, female: 1000},
    {male: 9500, female: 800},
    {male: 9900, female: 1100},
    {male: 100, female: 1200},
  ];
  public readonly verticalTabData: VerticalBarData[] = ageSections.map((section, i) => ({
    label: section,
    left: this.data[i].female,
    right: this.data[i].male,
  }));
}
