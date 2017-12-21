import { HeaderComponent } from './../../Components/header/header.component';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
//credencials:any
Credencials = { usuario: null,senha:null };
  constructor(public router: Router) { }

  ngOnInit() {
  }
  alerta() {
    //alert('asas')
    //this.router.navigateByUrl('/home')
    console.log(this.Credencials)
  }
}
