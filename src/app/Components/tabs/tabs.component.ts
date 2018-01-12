import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  encapsulation: ViewEncapsulation.None
  constructor() { }

  ngOnInit() {
  }

}
