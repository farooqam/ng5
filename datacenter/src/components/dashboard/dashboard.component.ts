import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { Cluster } from '../../services/dataCenter/cluster';

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

}
