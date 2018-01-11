import { StorageService } from './../storage.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CacheSrvService implements CanActivate {
  TituloObj: any = { Header: null, Notification: null };
  AuthObj: any = { Token: null, UserType: null, ClientId: null }
  FinalAuth: any
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }
  //Rotas↓
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.ifAuth()) {
      return true;
    }
    this.router.navigate(['/login']);
  }

  //Titulo da Page↓
  SetTitulo(titulo) {
    this.TituloObj.Header = titulo
  }
  GetTitulo() {
    return this.TituloObj.Header
  }

  //Autenticação↓

  SetAuth(token, usertype, client_id) {
    this.AuthObj.Token = token;
    this.AuthObj.UserType = usertype
    this.AuthObj.ClientId = client_id
    if (this.AuthObj.Token != null) {
        
      this.ifAuth();
    }
  }

  getAuth() {
    this.FinalAuth = [this.AuthObj.ClientId, this.AuthObj.UserType, this.AuthObj.Token]
    console.log(this.FinalAuth)
  }

  ifAuth() {
    let token = this.storage.readSessionStorage('token_user')
    if (token) {
      return true;
    }

    return false;
  }



}

/* //ChamarFunção  
  // Observable string sources
  private resultado = new Subject<any>();
  
    // Observable string streams
    FuncaoChamada$ = this.resultado.asObservable();
  
    // Service message commands
    ChamarFuncao() {
      this.resultado.next();
    } */