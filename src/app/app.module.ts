import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//Paginas↓
  import { MainPageComponent } from './Pages/main-page/main-page.component';
  import { HistoryPageComponent } from './Pages/history-page/history-page.component';
  import { LoginPageComponent } from './Pages/login-page/login-page.component';
//Serviços↓
  import { CacheSrvService } from './Services/CacheSrv/cache-srv.service';
  import { AmazonSrvService } from './Services/AmazonSrv/amazon-srv.service';  


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HistoryPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'home', component: MainPageComponent, data: {
          breadcrumbs: true,
          text: 'Home'
        }
      },
      {
        path: 'login', component: LoginPageComponent, data: {
          breadcrumbs: true,
          text: 'Login'
        }
      },
      {
        path: 'historico', component: HistoryPageComponent, data: {
          breadcrumbs: true,
          text: 'Histórico'
        }
      }
    ]),


  ],
  providers: [CacheSrvService, AmazonSrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
