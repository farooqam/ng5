import { Component, OnInit, Input } from '@angular/core';
import { ClusterNode } from '../../services/dataCenter/clusterNode';

@Component({
  selector: 'app-node-list',
  templateUrl: './nodeList.component.html',
  styleUrls: ['./nodeList.component.css']
})
export class NodeListComponent implements OnInit {

  @Input() nodes: Array<ClusterNode>;
  
  constructor() { }

  ngOnInit() {
  }

}
