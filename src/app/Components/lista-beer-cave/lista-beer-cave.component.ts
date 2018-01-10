import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-lista-beer-cave',
  templateUrl: './lista-beer-cave.component.html',
  styleUrls: ['./lista-beer-cave.component.scss']
})
export class ListaBeerCaveComponent implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'Jose',
      children: [{
        id: 2,name: 'maria'
      }]
    }
  ];
  isAnimated = true;
  autoCollapse = true;
  expandOnClick = true;

  options = {
    allowDrag: false,
    allowDrop: true
  };

  constructor() { }

  ngOnInit() {
  }

}

