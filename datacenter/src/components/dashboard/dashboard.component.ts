import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';
import { ClusterSettings } from 'cluster';
import { ClusterStatus } from '../../services/dataCenter/clusterStatus.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clusters: Array<Cluster>;
  
  constructor(private _dataCenterService: DataCenterService) { 
    
  }

  ngOnInit() {
    this._dataCenterService.getClusters().subscribe(clusters => {
      this.clusters = clusters;
    });
  }

  nodeCount(cluster: Cluster): number {
    return cluster.clusterNodes.length;
  }

  getClassFromStatus(status: ClusterStatus): string {
    switch(status){
      case ClusterStatus.Good:
        return 'oi oi-circle-check';
      case ClusterStatus.Warn:
        return 'oi oi-warning';
      case ClusterStatus.Danger:
        return 'oi oi-circle-x';
      default:
        return 'oi oi-question-mark';        
    }
  }
}
