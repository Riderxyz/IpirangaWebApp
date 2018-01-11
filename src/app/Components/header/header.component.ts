import { StorageService } from './../../Services/storage.service';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameLocalStorageSessionLogin = 'token_user';
  titulo: any;
  public ifLogged = false;



  constructor(
    public cacheSrv: CacheSrvService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titulo = this.cacheSrv.GetTitulo()
    if (this.titulo == null) {
      this.titulo = 'Teste';
    }

    let token = this.storage.readSessionStorage('token_user')
    if (token) {
      this.ifLogged = true;
    }
  }

  logoff() {
    console.log('chamada para sair');
    this.storage.eraseSessionStorage(this.nameLocalStorageSessionLogin);
    this.router.navigate(['/home']);
  }




}
