import { Component } from '@angular/core';
import { LinearGraphData } from '../ngx-linear-graph/interfaces';
import { data } from './mock';

@Component({
  selector: 'ngx-epidemiologic-graph',
  templateUrl: './epidemiologic-graph.component.html',
  styleUrls: ['./epidemiologic-graph.component.scss'],
})
export class EpidemiologicGraphComponent {
  data: LinearGraphData[] = data;
}
