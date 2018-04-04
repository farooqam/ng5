import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ClusterNode } from '../../services/dataCenter/clusterNode';

@Component({
  selector: 'app-node-detail',
  templateUrl: './nodeDetail.component.html',
  styleUrls: ['./nodeDetail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NodeDetailComponent implements OnInit {

  @Input() node: ClusterNode;

  constructor() { }

  ngOnInit() {
  }

}
