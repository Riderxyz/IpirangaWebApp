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
    this.cacheSrv.FuncaoChamada$.subscribe(
      () => {
        this.titulo = this.cacheSrv.TituloObj.Header;
      }
    );
    console.log(this.titulo);
    
  }

  ngOnInit() {
  }

Sair(){
  alert('asas')
}



}
