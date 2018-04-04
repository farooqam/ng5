import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NodeStatus } from '../../services/dataCenter/nodeStatus.enum';

@Component({
  selector: 'app-node-status',
  templateUrl: './nodeStatus.component.html',
  styleUrls: ['./nodeStatus.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NodeStatusComponent implements OnInit {

  @Input() status: NodeStatus;
  
  constructor() { }

  ngOnInit() {
  }

  getClassFromStatus(status: NodeStatus): string {
    switch(status){
      case NodeStatus.Good:
        return 'oi oi-circle-check';
      case NodeStatus.Warn:
        return 'oi oi-warning';
      case NodeStatus.Danger:
        return 'oi oi-circle-x';
      default:
        return 'oi oi-question-mark';        
    }
  }
}
