import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AmazonSrvService } from '../../Services/AmazonSrv/amazon-srv.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  //credencials:any

  Credencials = {
    usuario: 'emersonl',
    senha: 'HalfLife2!'
  };

  constructor(
    private router: Router,
    private awsSrv: AmazonSrvService,
    private cacheSrv: CacheSrvService
  ) { }

  ngOnInit() {

  }
  Login() {
    //this.cacheSrv.getAuth()
    this.cacheSrv.SetTitulo(this.Credencials.usuario)

    //   this.awsSrv.VerificarLogin(this.Credencials.usuario, this.Credencials.senha)


    this.router.navigateByUrl('/home')
  }
}
