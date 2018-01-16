import { AmazonSrvService } from './../../Services/AmazonSrv/amazon-srv.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { DateAdapter } from '@angular/material';

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
  Date_Picker_Model1 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  Date_Picker_Model2 = { data1: null, data2: null, data3: null, data4: null, data5: null, data6: null, data7: null, data8: null, data9: null, }
  iconchange: any

 constructor(
  public cacheSrv: CacheSrvService,
  private dateAdapter: DateAdapter<Date>,
  private service: AmazonSrvService) {
    dateAdapter.setLocale('en-in')
    this.itemDabase()
  }
 ngOnInit(): void {
   this.relatoriosLista();
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


// isAnimated = true;
// autoCollapse = true;
// expandOnClick = true;

// options = {
//   allowDrag: false,
//   allowDrop: true,
//   expandOnClick: true,
//   actionMapping: {
//     mouse: {
//       dblClick: (tree, node, $event) => {
//         if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
//       }
//     },
//     keys: {
//       [KEYS.ENTER]: (tree, node, $event) => {
//         node.expandeAll();
//       }
//     }
//   }
// }
