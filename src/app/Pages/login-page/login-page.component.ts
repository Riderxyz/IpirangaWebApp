import { HeaderComponent } from './../../Components/header/header.component';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CacheSrvService } from '../../Services/CacheSrv/cache-srv.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
//credencials:any
Credencials = { usuario: null,senha:null };
  constructor(public router: Router, public cacheSrv:CacheSrvService) { }

  ngOnInit() {
    
  }
  alerta() {
    this.cacheSrv.TituloObj.Header = 'Omega Max'
    
    //alert('asas')
    this.router.navigateByUrl('/home')
    console.log(this.Credencials)
    console.log(this.cacheSrv.TituloObj.Header)
    this.cacheSrv.ChamarFuncao();
  }
}
