import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-padaria',
  templateUrl: './lista-padaria.component.html',
  styleUrls: ['./lista-padaria.component.scss']
})
export class ListaPadariaComponent implements OnInit {
  Array_DatabaseApps:any;
  Selected: any;
  constructor() { 

    this.itemDataBase()
  }

  ngOnInit() {
  }

itemDataBase(){
  this.Array_DatabaseApps = [
    { value: '1', viewValue: 'JetOil' },
    { value: '2', viewValue: 'Padaria' },
    { value: '3', viewValue: 'Beercave' }
  ]


}
}