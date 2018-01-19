import { AmazonSrvService } from "./../../Services/AmazonSrv/amazon-srv.service";
import { Component, OnInit, NgModule } from "@angular/core";
import { CacheSrvService } from "./../../Services/CacheSrv/cache-srv.service";
import { DateAdapter } from "@angular/material";
import { Input } from "@angular/core/src/metadata/directives";
@Component({
  selector: "app-lista-beer-cave",
  templateUrl: "./lista-beer-cave.component.html",
  styleUrls: ["./lista-beer-cave.component.scss"],
  providers: [AmazonSrvService]
})
export class ListaBeerCaveComponent implements OnInit {
  AWS_DatabaseDropdown: any;
  AWS_DatabaseDatePicker: any;
  public relatorioService;
  public filesReport = [];
  AWS_Relatorio = { aplicacao: null, reporte: null, anos: null, meses: null, arquivos: null };

  Date_Picker_Model1 = {
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null
  };
  Date_Picker_Model2 = {
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null
  };
  iconchange: any;

  // @Input() relatorio: Relatorio
  constructor(
    public cacheSrv: CacheSrvService,
    private dateAdapter: DateAdapter<Date>,
    private service: AmazonSrvService
  ) {
    dateAdapter.setLocale("en-in");
    this.itemDabase();
  }
  ngOnInit(): void {
    this.relatoriosLista();
    this.relatorioListaFilter();

    setTimeout(() => {
      console.log('RESPOSTA RELATORIO SERVICE:  ', this.relatorioService)
    }, 6000);

  }
  itemDabase() {
    this.AWS_DatabaseDropdown = [
      { value: "1", viewValue: "JetOil" },
      { value: "2", viewValue: "Padaria" },
      { value: "3", viewValue: "Beercave" }
    ];

    this.AWS_DatabaseDatePicker = [
      {
        titulo: "1. Quantidade de Usuario",
        periodo1: this.AWS_Relatorio.anos,
        periodo2: this.Date_Picker_Model2.data1,
        ID: "1",
        Seta: null
      },

      {
        titulo: "2. Quantidade de publicações por usuario",
        periodo1: this.Date_Picker_Model1.data2,
        periodo2: this.Date_Picker_Model2.data2,
        ID: 2,
        Seta: null
      },

      {
        titulo: "3. Quantidade de publicações por perfil",
        periodo1: this.Date_Picker_Model1.data3,
        periodo2: this.Date_Picker_Model2.data3,
        ID: 3,
        Seta: null
      },
      {
        titulo: "4. Quantidade de visualizações por perfil",
        periodo1: this.Date_Picker_Model1.data4,
        periodo2: this.Date_Picker_Model2.data4,
        ID: 4,
        Seta: null
      },
      {
        titulo: "5. Quantidade de curtidas por publicação",
        periodo1: this.Date_Picker_Model1.data5,
        periodo2: this.Date_Picker_Model2.data5,
        ID: 5,
        Seta: null
      },
      {
        titulo: "6. Quantidade de videos assistidos por dia e faixa de horario",
        periodo1: this.Date_Picker_Model1.data6,
        periodo2: this.Date_Picker_Model2.data6,
        ID: 6,
        Seta: null
      },
      {
        titulo: "7. Quantidade de visualizações por video",
        periodo1: this.Date_Picker_Model1.data7,
        periodo2: this.Date_Picker_Model2.data7,
        ID: 7,
        Seta: null
      },
      {
        titulo: "8. Quantidade geral de acessos, independente da interação",
        periodo1: this.Date_Picker_Model1.data8,
        periodo2: this.Date_Picker_Model2.data8,
        ID: 8,
        Seta: null
      },
      {
        titulo: "9. Quantidade de interações por dia e faixa de horario deas publicações",
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        ID: 9,
        Seta: null
      },
      {
        titulo: "10. Geral",
        periodo1: this.Date_Picker_Model1.data9,
        periodo2: this.Date_Picker_Model2.data9,
        ID: 10,
        Seta: null
      }
    ];
  }
  iniciarRotacao(Titulo, relatorioID) {
    //this.relatoriosLista();
    console.log('OBJ TITULO: ',Titulo);
    console.log('OBJ RELATORIO: ',relatorioID)
    console.log('VALOR A PARTIR DE RELATORIOID: ',this.AWS_Relatorio.reporte[Titulo.ID - 1]);
    //Titulo = Titulo.ID
    relatorioID = this.AWS_Relatorio.reporte[Titulo.ID - 1].reportId;
    if (Titulo.ID == relatorioID) {
      console.log('FUNCIONA =>  relatorioID:', relatorioID, ' = TITULO.ID: ', Titulo.ID);
      var ano = relatorioID.years[Titulo.ID - 1].year;
        if (ano = this.AWS_Relatorio.anos[Titulo.ID].year) { // tentar a partir daqui - logica, comparar o dado de "ano" de Titulo, que não possui essa informação, com ano de AWS_Relatorio.
          console.log('Ano bate');
        }else{
          console.log('Dado para ano não resolve');
        }
    }else{
      console.log('ERRO EM - relatorioID.reportId');
    }


  }

  Ativar(item) {
    console.log(item);
    console.log(/*this.Date_Picker_Model*/);
  }
  relatoriosLista() {
    return this.service
      .listarRelatorioService()
      .then(res => {
        this.relatorioService = res;
        console.log(this.relatorioService.years)
      })
      .catch(err => console.log(err));
  }

  relatorioListaFilter() {
    var data = [];
    var application = 3;
    var reportId = 2;
    var year = 0;
    var month = 0;
    var files = [];

    this.service
      .listarRelatorioService()
      .then(res => {
        data = res;
        var reports = [];
        var years = [];
        var months = [];
        var file = [];
        //this.AWS_Relatorio.aplicacao
        data.map(d => {
          if (d.application == application) {
            this.AWS_Relatorio.reporte = d.reports;
            console.log("APPLICATION: ", application);
            console.log("REPORTS: ", this.AWS_Relatorio.reporte);


            data.map(d => {
              years = d.reports;
              this.AWS_Relatorio.anos = d.reports[reportId].years;
              console.log("ANOS: ", this.AWS_Relatorio.anos);


              data.map(d => {
                months = d.reports[reportId].years;
                this.AWS_Relatorio.meses = d.reports[reportId].years[year].months;
                console.log("MESES: ", this.AWS_Relatorio.meses);


                data.map(d => {
                  // files = d.reports[reportId].years[year].months;
                  this.AWS_Relatorio.arquivos = d.reports[reportId].years[year].months[month].files;
                  this.filesReport = files;
                  console.log("ARQUIVOS: ", this.AWS_Relatorio.arquivos);
                  // console.log("FILES REPORT: ", this.filesReport);
                });
              }
              );
            }
            );
          }
        });




      })
      .catch(err => console.log(err));
  }
}
