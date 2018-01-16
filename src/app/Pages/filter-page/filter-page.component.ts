import { Component, OnInit, ViewChild } from '@angular/core';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],
  
})

export class FilterPageComponent implements OnInit {
  AWS_DatabaseDropdown: any;
  AWS_DatabaseDatePicker: any;
  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  iconchange: any
  model: any

  @ViewChild('dayPicker') DatePicker_de_Inicio: DatePickerComponent;
  @ViewChild('dayPicker2') DatePicker_de_Fim: DatePickerComponent;


  constructor(public cacheSrv: CacheSrvService) {
    //dateAdapter.setLocale('en-in')
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
        pickerID: "#Picker1",
        Seta: null,
      },

      {
        titulo: '3. Quantidade de publicações por perfil',
        periodo1: this.Date_Picker_Model1.data3,
        periodo2: this.Date_Picker_Model2.data3,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '4. Quantidade de visualizações por perfil',
        periodo1: this.Date_Picker_Model1.data4,
        periodo2: this.Date_Picker_Model2.data4,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '5. Quantidade de curtidas por publicação',
        periodo1: this.Date_Picker_Model1.data5,
        periodo2: this.Date_Picker_Model2.data5,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '6. Quantidade de videos assistidos por dia e faixa de horario',
        periodo1: this.Date_Picker_Model1.data6,
        periodo2: this.Date_Picker_Model2.data6,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '7. Quantidade de visualizações por video',
        periodo1: this.Date_Picker_Model1.data7,
        periodo2: this.Date_Picker_Model2.data7,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '8. Quantidade geral de acessos, independente da interação',
        periodo1: this.Date_Picker_Model1.data8,
        periodo2: this.Date_Picker_Model2.data8,
        pickerID: "#Picker1",
        Seta: null,
      },
      {
        titulo: '9. Quantidade de interações por dia e faixa de horario deas publicações',
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        pickerID: "#Picker1",
        Seta: null,
      },

    ]
  }

<<<<<<< HEAD
  iniciarRotacao() {
    console.log(this.iconchange);

    if (this.iconchange == null || this.iconchange == 'rotateToClose') {
      this.iconchange = 'rotateToOpen'
    } else {
      if (this.iconchange == 'rotateToOpen') {
        this.iconchange = 'rotateToClose'
=======
  iniciarRotacao(item) {
    console.log('Ativação da seta', item.Seta);

    if (item.Seta == null || item.Seta == 'rotateToClose') {
      item.Seta = 'rotateToOpen'
    } else {
      if (item.Seta == 'rotateToOpen') {
        item.Seta = 'rotateToClose'
>>>>>>> reueldev
      }
    }
    console.log(this.iconchange);

  }

  open(date) {
    console.log('SENDO CLICADO!', date)
    if (date == 1) {
      this.DatePicker_de_Inicio.api.open();  
    }
    if (date == 2) {
      this.DatePicker_de_Fim.api.open()
    }
    
  }


  Ativar(item) {
    console.log(item.value)
    console.log(item.periodo1._d)
    console.log(/*this.Date_Picker_Model*/)
  }
}
