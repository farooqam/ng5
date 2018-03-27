import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';

@Component({
  selector: 'app-show-metrics',
  templateUrl: './showMetrics.component.html',
  styleUrls: ['./showMetrics.component.css']
})
export class ShowMetricsComponent implements OnInit {

  clusters: Array<Cluster>;

  constructor(private _dataCenterService: DataCenterService) { }

  ngOnInit() {
    this.clusters = this._dataCenterService.getClusters();
    console.log(this.clusters);
  }

}
