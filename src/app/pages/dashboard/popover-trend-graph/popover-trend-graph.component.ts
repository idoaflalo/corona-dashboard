import { Component, OnInit } from '@angular/core';
import { LinearGraphData } from '../ngx-linear-graph/interfaces';
import { data } from '../epidemiologic-graph/mock';

@Component({
  selector: 'ngx-popover-trend-graph',
  templateUrl: './popover-trend-graph.component.html',
  styleUrls: ['./popover-trend-graph.component.scss'],
})
export class PopoverTrendGraphComponent implements OnInit {
  data: LinearGraphData[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
