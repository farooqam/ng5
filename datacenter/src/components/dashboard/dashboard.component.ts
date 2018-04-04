import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';
import { ClusterStatus } from '../../services/dataCenter/clusterStatus.enum';
import { ClusterNode } from '../../services/dataCenter/clusterNode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _selectedNode: ClusterNode;
  clusters: Array<Cluster>;
  showNodeDetail: boolean = false;

  constructor(private _dataCenterService: DataCenterService) { 
    
  }

  ngOnInit() {
    this.getData();
  }

  nodeCount(cluster: Cluster): number {
    return cluster.clusterNodes.length;
  }

  refresh(): void {
    console.log('refreshing data...');
    this.getData();
  }

  handleNodeClicked($event: ClusterNode): void {
    this.showNodeDetail = true;
    this._selectedNode = $event;
  }

  getSelectedNode(): ClusterNode {
    return this._selectedNode;
  }

  private getData(): void {
    this._dataCenterService.getClusters().subscribe(clusters => {
      this.clusters = clusters;
    });
  }
}
