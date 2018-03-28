import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-show-metrics',
  templateUrl: './showMetrics.component.html',
  styleUrls: ['./showMetrics.component.css']
})
export class ShowMetricsComponent implements OnInit {

  clusters: Array<Cluster>;

  constructor(private _dataCenterService: DataCenterService) { }

  ngOnInit() {
    this._dataCenterService.getClusters().subscribe(clusters => {
      this.clusters = clusters;
    });
    
  }

}
