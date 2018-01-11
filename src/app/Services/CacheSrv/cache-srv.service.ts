import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class CacheSrvService implements CanActivate {
  // UsuarioObj: any = { username: null };
  // DatabaseObj: any = { Destino: null, Executar: null };
  private ifLogged = false;

  TituloObj: any = { Header: null, notification: null };
  constructor(
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('verifica se existe autorização');
    if (this.ifAuth()) {
      return true;
    }
    console.log('deu merda');
    this.router.navigate(['/login']);
  }

//ChamarFunção
  // Observable string sources
  private resultado = new Subject<any>();

  // Observable string streams
  FuncaoChamada$ = this.resultado.asObservable();

  // Service message commands
  ChamarFuncao() {
    this.resultado.next();
  }
//Titulo da Page
  SetTitulo(titulo) {
    this.TituloObj.Header = titulo
  }

  GetTitulo() {
    return this.TituloObj.Header
  }


   ifAuth() {
    return true;
  }



}

