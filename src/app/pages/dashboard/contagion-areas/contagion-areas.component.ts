import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TreeNode, ContagionAreaEntry } from './interfaces';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-contagion-areas',
  templateUrl: './contagion-areas.component.html',
  styleUrls: ['./contagion-areas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContagionAreasComponent implements OnInit {
  allColumns = [ 'location', 'sickCount', 'percentageGrowth', 'percentagePopulation', 'isolatedCount'];
  columnsNameValueMap: Record<string, string> = {
    location: 'יישוב',
    sickCount: 'חולים',
    percentageGrowth: '% גדילה',
    percentagePopulation: '% אוכלוסייה',
    isolatedCount: 'בבידוד',
  };
  dataSource: NbTreeGridDataSource<any>;
  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>) {}

  ngOnInit(): void {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  changeSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<ContagionAreaEntry>[] = [
    {
      data: { location: 'הרצליה', sickCount: 6, percentageGrowth: '20%', percentagePopulation: '10%', isolatedCount: 100 },
    },
    {
      data: { location: 'בארותיים', sickCount: 10, percentageGrowth: '25%', percentagePopulation: '99%', isolatedCount: 400 },
    },
    {
      data: { location: 'עזה', sickCount: 500, percentageGrowth: '1%', percentagePopulation: '80%', isolatedCount: 5000 },
    },
    {
      data: { location: 'בני ברק', sickCount: 999999, percentageGrowth: '0.2%', percentagePopulation: '3%', isolatedCount: 0 },
    },
    {
      data: { location: 'תל אביב', sickCount: 9999, percentageGrowth: '80%', percentagePopulation: '15%', isolatedCount: 5050 },
    },
    {
      data: { location: 'חיפה', sickCount: 700, percentageGrowth: '55%', percentagePopulation: '20%', isolatedCount: 2000 },
    },
    {
      data: { location: 'פתח תקווה', sickCount: 600, percentageGrowth: '40%', percentagePopulation: '70%', isolatedCount: 1000 },
    },
    {
      data: { location: 'אילת', sickCount: 500, percentageGrowth: '50%', percentagePopulation: '25%', isolatedCount: 1200 },
    },
  ];
}
