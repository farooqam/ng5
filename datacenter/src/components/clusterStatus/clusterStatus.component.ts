import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ClusterStatus } from '../../services/dataCenter/clusterStatus.enum';

@Component({
  selector: 'app-cluster-status',
  templateUrl: './clusterStatus.component.html',
  styleUrls: ['./clusterStatus.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClusterStatusComponent implements OnInit {

  @Input() status: ClusterStatus

  constructor() { }

  ngOnInit() {
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
