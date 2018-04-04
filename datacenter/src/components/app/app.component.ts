import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(DashboardComponent) _dashboard: DashboardComponent;

  ngOnInit(): void {
    console.log(environment);
  }

  refresh(): void {
    this._dashboard.refresh();
  }
}
