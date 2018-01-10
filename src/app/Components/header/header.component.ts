import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
titulo:any
  constructor(public cacheSrv:CacheSrvService) { 
    this.titulo = this.cacheSrv.GetTitulo()
    this.cacheSrv.FuncaoChamada$.subscribe(
      () => {
        console.log(this.cacheSrv.TituloObj.Header);   
        this.titulo = this.cacheSrv.TituloObj.Header;
        //this.Sair()
      }
    );
    console.log(this.titulo); 

    if (this.titulo == null) {
      this.titulo = 'Teste';
    }
  }

  ngOnInit() {
  }

Sair(){
  console.log(this.cacheSrv.TituloObj.Header);
  //this.titulo = this.cacheSrv.TituloObj.Header;
  console.log(this.titulo)
}



}
