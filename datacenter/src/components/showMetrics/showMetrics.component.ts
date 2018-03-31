import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-show-metrics',
  templateUrl: './showMetrics.component.html',
  styleUrls: ['./showMetrics.component.css']
})
export class ShowMetricsComponent implements OnInit, OnDestroy {

  clusters: Array<Cluster>;
  private _interval: any;

  constructor(private _dataCenterService: DataCenterService) { }

  ngOnInit() {
    this.setData();
    this._interval = setInterval(() => this.setData(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this._interval);
  }


  private setData(): void {
    this._dataCenterService.getClusters().subscribe(clusters => {
      this.clusters = clusters;
    });
  }

}
