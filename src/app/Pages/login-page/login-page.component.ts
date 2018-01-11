import { StorageService } from './../../Services/storage.service';
import { CacheSrvService } from './../../Services/CacheSrv/cache-srv.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AmazonSrvService } from '../../Services/AmazonSrv/amazon-srv.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  //credencials:any

  nameLocalStorageSessionLogin = 'token_user';

  credencials = {
    usuario: 'emersonl',
    senha: 'HalfLife2!'
  };


  constructor(
    private router: Router,
    private awsSrv: AmazonSrvService,
    private cacheSrv: CacheSrvService,
    private storage: StorageService
  ) { }

  ngOnInit() {

  }
  Login() {
    this.loading(true);

    this.cacheSrv.SetTitulo(this.credencials.usuario)

    this.awsSrv.VerificarLogin(this.credencials.usuario, this.credencials.senha)
      .then((res) => {
        this.storage.writeSessionStorage(JSON.stringify(res), this.nameLocalStorageSessionLogin);
        if (this.storage.readSessionStorage(this.nameLocalStorageSessionLogin)) {
          console.log('logado com sucesso');
          this.router.navigateByUrl('/home')
        } else {
          console.log('deu merda');
        }
        this.loading(false);
      })
      .catch((err) => console.log(err));




    //   this.awsSrv.VerificarLogin(this.Credencials.usuario, this.Credencials.senha)


    // this.router.navigateByUrl('/home')
  }



  // loading 

  private loading(statusModal: any) {
    if (statusModal) {
      swal({
        showConfirmButton: false,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false
      });
      swal.showLoading();
    } else {
      swal.hideLoading();
      swal.close();
    }
  }


}
