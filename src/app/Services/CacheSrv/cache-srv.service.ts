import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CacheSrvService {
  // UsuarioObj: any = { username: null };
  // DatabaseObj: any = { Destino: null, Executar: null };
  TituloObj: any = { Header: null, notification: null };
  constructor() {
    console.log('sasasssas')
  }
  // Observable string sources
  private resultado = new Subject<any>();

  // Observable string streams
  FuncaoChamada$ = this.resultado.asObservable();

  // Service message commands
  ChamarFuncao() {
    this.resultado.next();
  }


SetTitulo(titulo){
  this.TituloObj.Header = titulo
}

GetTitulo(){
  return this.TituloObj.Header
}
}
