import { AmazonSrvService } from './../../Services/AmazonSrv/amazon-srv.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],

})

export class FilterPageComponent implements OnInit {
  Array_DatabaseApps: any;
  Array_DatabaseFilters: any;
  Array_DatabasePerfil: any;
  Array_DatabaseAction: any;
  Array_DatabaseMesRef: any;
  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  model: any
  DynamoServiceData = {Aplication:null, StartDate:null, EndDate:null}
  Logado: boolean = false
  Selected: any;
  @ViewChild('dayPicker') DatePicker_de_Inicio: DatePickerComponent;
  @ViewChild('dayPicker2') DatePicker_de_Fim: DatePickerComponent;


  constructor(public cacheSrv: CacheSrvService,public AWS_Srv: AmazonSrvService) {
    //dateAdapter.setLocale('en-in')
    this.itemDabase()
    
  }

  ngOnInit() {
  }
  itemDabase() {
    this.Array_DatabaseApps = [
      { value: '1', viewValue: 'JetOil' },
      { value: '2', viewValue: 'Padaria' },
      { value: '3', viewValue: 'Beercave' }
    ]
    this.Array_DatabaseFilters = [
      {
        titulo: '1. Quantidade de Usuario',
        periodo1: this.Date_Picker_Model1.data1,
        periodo2: this.Date_Picker_Model2.data1,
        //Dropdowns control
        Seta: null,
        MostrarData: true,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: false

      },
      {
        titulo: '2. Quantidade de publicações por usuario',
        periodo1: this.Date_Picker_Model1.data2,
        periodo2: this.Date_Picker_Model2.data2,
        //Dropdowns control
        MostrarData: true,
        MostrarUsuario: true,
        MostrarAcao: true,
        MostrarPerfil: true,
        MostrarResponsavel: false,
        MostrarReferencia: false
      },

      {
        titulo: '3. Quantidade de publicações por perfil',
        periodo1: this.Date_Picker_Model1.data3,
        periodo2: this.Date_Picker_Model2.data3,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: true,
        MostrarPerfil: true,
        MostrarResponsavel: false,
        MostrarReferencia: true
      },
      {
        titulo: '4. Quantidade de visualizações por perfil',
        periodo1: this.Date_Picker_Model1.data4,
        periodo2: this.Date_Picker_Model2.data4,
        //Dropdowns control
        MostrarData: true,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: true,
        MostrarResponsavel: false,
        MostrarReferencia: false
      },
      {
        titulo: '5. Quantidade de curtidas por publicação',
        periodo1: this.Date_Picker_Model1.data5,
        periodo2: this.Date_Picker_Model2.data5,
        //Dropdowns control
        MostrarData: true,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: true,
        MostrarReferencia: false
      },
      {
        titulo: '6. Quantidade de videos assistidos por dia e faixa de horario',
        periodo1: this.Date_Picker_Model1.data6,
        periodo2: this.Date_Picker_Model2.data6,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: true,
      },
      {
        titulo: '7. Quantidade de visualizações por video',
        periodo1: this.Date_Picker_Model1.data7,
        periodo2: this.Date_Picker_Model2.data7,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: true,
      },
      {
        titulo: '8. Quantidade geral de acessos, independente da interação',
        periodo1: this.Date_Picker_Model1.data8,
        periodo2: this.Date_Picker_Model2.data8,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: true,
      },
      {
        titulo: '9. Quantidade de interações por dia e faixa de horario deas publicações',
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: false,
      },
      {
        titulo: '10. Quantidade de interações por dia e faixa de horario deas publicações',
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        //Dropdowns control
        MostrarData: false,
        MostrarUsuario: false,
        MostrarAcao: false,
        MostrarPerfil: false,
        MostrarResponsavel: false,
        MostrarReferencia: false,
      },

    ]
    this.Array_DatabasePerfil = [
      { value: 1, viewValue: 'Funcionario' },
      { value: 2, viewValue: 'Especialista' },
      { value: 3, viewValue: 'Embaixador' },
      { value: 4, viewValue: 'Administrador' }
    ]
    this.Array_DatabaseAction = [
      { value: 1, viewValue: 'Video' },
      { value: 2, viewValue: 'Fotos' }
    ]
    this.Array_DatabaseMesRef = [
      { value: 1, viewValue: 'Janeiro' },
      { value: 2, viewValue: 'Feveiro' },
      { value: 3, viewValue: 'Março' },
      { value: 4, viewValue: 'Abril' },
      { value: 5, viewValue: 'Maio' },
      { value: 6, viewValue: 'Junho' },
      { value: 7, viewValue: 'Julho' },
      { value: 8, viewValue: 'Agosto' },
      { value: 9, viewValue: 'Setembro' },
      { value: 10, viewValue: 'Outubro' },
      { value: 11, viewValue: 'Novembro' },
      { value: 12, viewValue: 'Dezembro' },


    ]
  }

  iniciarRotacao(item) {
    console.log('Ativação da seta', item.Seta);

    if (item.Seta == null || item.Seta == 'rotateToClose') {
      item.Seta = 'rotateToOpen'
    } else {
      if (item.Seta == 'rotateToOpen') {
        item.Seta = 'rotateToClose'
      }
    }

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

  teste(item) {
    console.log(item)
    this.model = item.viewValue
    console.log(this.model)
    
  }
  Ativar(relatorio) {
    //this.DynamoServiceData.Aplication = 
    console.log(relatorio)
    //console.log(aplicacao)
    this.AWS_Srv.GerarRelatorio()
    console.log('AQUI ESTA O NGMODEL',this.DynamoServiceData.Aplication)
    console.log(/*this.Date_Picker_Model*/)
  }

}
