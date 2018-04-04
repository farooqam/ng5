import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ClusterNode } from '../../services/dataCenter/clusterNode';

@Component({
  selector: 'app-node-list',
  templateUrl: './nodeList.component.html',
  styleUrls: ['./nodeList.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NodeListComponent implements OnInit {

  @Input() nodes: Array<ClusterNode>;
  @Output() onNodeClicked: EventEmitter<ClusterNode> = new EventEmitter<ClusterNode>();
  
  constructor() { }

  ngOnInit() {
  }

  handleNodeClick(node: ClusterNode) : void {
    this.onNodeClicked.emit(node);
  }
}
