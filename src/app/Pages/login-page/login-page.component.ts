import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
//credencials:any

Credencials = {
   usuario: null,
   senha:null 
  };


  constructor(
    private router: Router,
    //private cacheSrv:CacheSrvService
  ) {}

  ngOnInit() {
    
  }
  Login() {
    //this.cacheSrv.SetTitulo(this.Credencials.usuario)
    //this.cacheSrv.ChamarFuncao();
    //this.router.navigateByUrl('/home')
  }  
}
