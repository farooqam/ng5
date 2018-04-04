import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MetricStatus } from '../../services/dataCenter/metricStatus.enum';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MetricComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() value: any;
  @Input() status: MetricStatus
  
  constructor() { }

  ngOnInit() {
  }

}
