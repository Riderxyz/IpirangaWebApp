import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-padaria',
  templateUrl: './lista-padaria.component.html',
  styleUrls: ['./lista-padaria.component.scss']
})
export class ListaPadariaComponent implements OnInit {
  nodes = [
    {id: 1, name: '1. Quantidade de usuarios',
      children: [
          {id: 10, name: '2017-Abril'},
          {id: 11, name: '2017-Maio',
            children: [
              {id: 12, name: 'acesso_periodo_01052018_15052018    Gerado:15/05/2018-10:20h'},
              {id: 13, name: 'acesso_periodo_16052018_31052018    Gerado:31/05/2018-18:15h'}
            ]
        },
        {id: 14, name: '2017-Junho'},
        {id: 15, name: '2017-Julho',
          children: [
            {id: 12, name: 'acesso_periodo_01052018_15052018    Gerado:15/05/2018-10:20h'},
            {id: 13, name: 'acesso_periodo_16052018_31052018    Gerado:31/05/2018-18:15h'},
            {id: 14, name: 'acesso_periodo_01052018_15052018    Gerado:15/05/2018-10:20h'},
            {id: 15, name: 'acesso_periodo_16052018_31052018    Gerado:31/05/2018-18:15h'}
          ]
        }
      ]
    },
    {id: 2, name: '2. Quantidade de publicações por usuarios'},
    {id: 3, name: '3. Quantidade de publicações por perfil'},
    {id: 4, name: '4. Quantidade de visualizações por publicação'},
    {id: 5, name: '5. Quantidade de curtidas por publicação'},
    {id: 6, name: '6. Quantidade de videos assistidos por dia e faixa de horário'},
    {id: 7, name: '7. Quantidade de visualizações por vídeo, identificando o responsável pela publicação'},
    {id: 8, name: '8. Quantidade de geral de acessos, independente da interação'},
    {id: 9, name: '9. Quantidade de interações por dia e faixa de horário das publicações'}
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
