import { Component, OnInit } from '@angular/core';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {

  constructor(public cacheSrv:CacheSrvService) { }

  ngOnInit() {
  }

}
