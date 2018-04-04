import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
  
  constructor() { }

  ngOnInit() {
  }

  refresh(): void {
    console.log('emitting refresh event');
    this.onRefresh.emit();
  }
}
