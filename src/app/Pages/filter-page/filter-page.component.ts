import { Component, OnInit } from '@angular/core';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {
  AWS_DatabaseDropdown: any;
  AWS_DatabaseDatePicker: any;
  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  iconchange: any
  constructor(public cacheSrv: CacheSrvService, private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in')
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
      {
        titulo: '1. Quantidade de Usuario',
        periodo1: this.Date_Picker_Model1.data1,
        periodo2: this.Date_Picker_Model2.data1,
        pickerID: "#Picker1"
      },

      {
        titulo: '2. Quantidade de publicações por usuario',
        periodo1: this.Date_Picker_Model1.data2,
        periodo2: this.Date_Picker_Model2.data2,
        pickerID: "#Picker1"
      },

      {
        titulo: '3. Quantidade de publicações por perfil',
        periodo1: this.Date_Picker_Model1.data3,
        periodo2: this.Date_Picker_Model2.data3,
        pickerID: "#Picker1"
      },
      {
        titulo: '4. Quantidade de visualizações por perfil',
        periodo1: this.Date_Picker_Model1.data4,
        periodo2: this.Date_Picker_Model2.data4,
        pickerID: "#Picker1"
      },
      {
        titulo: '5. Quantidade de curtidas por publicação',
        periodo1: this.Date_Picker_Model1.data5,
        periodo2: this.Date_Picker_Model2.data5,
        pickerID: "#Picker1"
      },
      {
        titulo: '6. Quantidade de videos assistidos por dia e faixa de horario',
        periodo1: this.Date_Picker_Model1.data6,
        periodo2: this.Date_Picker_Model2.data6,
        pickerID: "#Picker1"
      },
      {
        titulo: '7. Quantidade de visualizações por video',
        periodo1: this.Date_Picker_Model1.data7,
        periodo2: this.Date_Picker_Model2.data7,
        pickerID: "#Picker1"
      },
      {
        titulo: '8. Quantidade geral de acessos, independente da interação',
        periodo1: this.Date_Picker_Model1.data8,
        periodo2: this.Date_Picker_Model2.data8,
        pickerID: "#Picker1"
      },
      {
        titulo: '9. Quantidade de interações por dia e faixa de horario deas publicações',
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        pickerID: "#Picker1"
      },

    ]
  }

  iniciarRotacao() {
    console.log(this.iconchange);

    if (this.iconchange == null) {
      this.iconchange = 'rotateToOpen'
    }
    console.log(this.iconchange);

  }


  Ativar(item) {
    console.log(item.value)
    console.log(/*this.Date_Picker_Model*/)
  }
}
