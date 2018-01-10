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
  import { FilterPageComponent } from './Pages/filter-page/filter-page.component';
//Serviços↓
  import { CacheSrvService } from './Services/CacheSrv/cache-srv.service';
  import { AmazonSrvService } from './Services/AmazonSrv/amazon-srv.service';
//Componentes↓
  import { HeaderComponent } from './Components/header/header.component';
  import { TabsComponent } from './Components/tabs/tabs.component';
  import { FooterComponent } from './Components/footer/footer.component';

//AngularMaterial↓
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatListModule } from '@angular/material/list';
  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatCardModule } from '@angular/material/card';
  import { MatIconModule } from '@angular/material/icon';
  import { ListaJetOilComponent } from './Components/lista-jet-oil/lista-jet-oil.component';
  import { ListaPadariaComponent } from './Components/lista-padaria/lista-padaria.component';
  import { ListaBeerCaveComponent } from './Components/lista-beer-cave/lista-beer-cave.component';

//Angular tree
  import { TreeModule } from 'angular-tree-component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HistoryPageComponent,
    HeaderComponent,
    LoginPageComponent,
    FilterPageComponent,
    TabsComponent,
    FooterComponent,
    ListaJetOilComponent,
    ListaPadariaComponent,
    ListaBeerCaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    TreeModule,
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
      },
      {
        path: 'ListaJetOil', component:  ListaJetOilComponent, data: {
          breadcrumbs: true,
          text: 'ListaJetOil'
        }
      },
      {
        path: 'ListaPadaria', component:  ListaPadariaComponent, data: {
          breadcrumbs: true,
          text: 'ListaPadaria'
        }
      },
      {
        path: 'ListaBeerCave', component:  ListaBeerCaveComponent, data: {
          breadcrumbs: true,
          text: 'ListaBeerCave'
        }
      }
    ]),


  ],
  providers: [CacheSrvService, AmazonSrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
