import { Component } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TreeNode, ContagionAreaEntry } from './interfaces';

@Component({
  selector: 'ngx-contagion-areas',
  templateUrl: './contagion-areas.component.html',
  styleUrls: ['./contagion-areas.component.css'],
})
export class ContagionAreasComponent {
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

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>) {
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
      data: { location: 'הרצליה', sickCount: 6, percentageGrowth: 20, percentagePopulation: 10, isolatedCount: 100 },
    },
    {
      data: { location: 'בארותיים', sickCount: 10, percentageGrowth: 25, percentagePopulation: 99, isolatedCount: 400 },
    },
    {
      data: { location: 'עזה', sickCount: 9999, percentageGrowth: 50, percentagePopulation: 80, isolatedCount: 5000 },
    },
  ];
}
