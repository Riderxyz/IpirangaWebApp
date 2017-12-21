import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Paginas↓
  import { MainPageComponent } from './Pages/main-page/main-page.component';
  import { HistoryPageComponent } from './Pages/history-page/history-page.component';
  import { LoginPageComponent } from './Pages/login-page/login-page.component';
//Serviços↓
  import { CacheSrvService } from './Services/CacheSrv/cache-srv.service';
  import { AmazonSrvService } from './Services/AmazonSrv/amazon-srv.service'; 
//Componentes↓
  import { HeaderComponent } from './Components/header/header.component';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HistoryPageComponent,
    HeaderComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
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
