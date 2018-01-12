import { Component, OnInit } from '@angular/core';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {
  AWS_DatabaseDropdown: any;
  AWS_DatabaseDatePicker: any;
  constructor(public cacheSrv: CacheSrvService) {
  this.itemDabase()
  }

  ngOnInit() {
  }
  itemDabase() {
    this.AWS_DatabaseDropdown = [
      { value: '1', viewValue: 'JetOil' },
      { value: '2', viewValue: 'Padaria' },
      { value: '3', viewValue: 'Beercave' }
    ]

    this.AWS_DatabaseDatePicker = [
      { titulo:'1. Quantidade de Usuario',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'2. Quantidade de publicações por usuario',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'3. Quantidade de publicações por perfil',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'4. Quantidade de visualizações por perfil',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'5. Quantidade de curtidas por publicação',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'6. Quantidade de videos assistidos por dia e faixa de horario',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'7. Quantidade de visualizações por video',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'8. Quantidade geral de acessos, independente da interação',pickerName: "picker1", pickerID: "#Picker1" },
      { titulo:'9. Quantidade de interações por dia e faixa de horario deas publicações',pickerName: "picker1", pickerID: "#Picker1" },

    ]
  }
}
