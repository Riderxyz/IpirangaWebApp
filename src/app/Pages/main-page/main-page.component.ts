import { Component, OnInit } from '@angular/core';
import { FilterPageComponent } from '../filter-page/filter-page.component';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { TabsComponent } from './../../Components/tabs/tabs.component';
import { HeaderComponent } from '../../Components/header/header.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
