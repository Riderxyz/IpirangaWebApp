import { AmazonSrvService } from './../../Services/AmazonSrv/amazon-srv.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { DateAdapter } from '@angular/material';
<<<<<<< HEAD
import { Input } from '@angular/core/src/metadata/directives';
import {Relatorio} from './../../Control/relatorioModel';
=======

>>>>>>> reueldev
@Component({
  selector: 'app-lista-beer-cave',
  templateUrl: './lista-beer-cave.component.html',
  styleUrls: ['./lista-beer-cave.component.scss'],
  providers: [AmazonSrvService]
})
export class ListaBeerCaveComponent implements OnInit {
  AWS_DatabaseDropdown: any;
  AWS_DatabaseDatePicker: any;
  public relatorioService;
<<<<<<< HEAD
  relatorios: Relatorio[]

  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }

  @Input() relatorio: Relatorio
=======
  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  iconchange: any

>>>>>>> reueldev
 constructor(
  public cacheSrv: CacheSrvService,
  private dateAdapter: DateAdapter<Date>,
  private service: AmazonSrvService) {
    dateAdapter.setLocale('en-in')
    this.itemDabase()
  }
 ngOnInit(): void {
   this.service.relatorios().subscribe(relatorios =>{
     this.relatorios = []
     for (var i in relatorios){
       if("months" in relatorios[i]){
        for(var j in relatorios[i].months){
          if("Keys" in relatorios[i].months[j]){
            for(var k in relatorios[i].months[j].Keys){
              var relatorio = new Relatorio();
              relatorio.key = relatorios[i].months[i].Keys[k].Key.Key;
              relatorio.size = relatorios[i].months[i].Keys[k].Key.Size;
              this.relatorios.push(relatorio);
              console.log(relatorio)
            }
          }
        }
       }
     }
   });
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
        pickerID: "#Picker1",
        Seta: null,
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
=======
  iniciarRotacao() {
    console.log(this.iconchange);

    if (this.iconchange == null || this.iconchange == 'rotateToClose') {
      this.iconchange = 'rotateToOpen'
    } else {
      if (this.iconchange == 'rotateToOpen') {
        this.iconchange = 'rotateToClose'
      }
    }
    console.log(this.iconchange);

  }
>>>>>>> reueldev

  Ativar(item) {
    console.log(item.value)
    console.log(/*this.Date_Picker_Model*/)
  }
  relatoriosLista() {
    return this.service.listarRelatorioService()
    .then((res) => this.relatorioService = res)
    .catch((err) => console.log(err) );
  }


}

