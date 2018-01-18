import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//NGX Bootstrap
  import {

    BsDropdownModule,
    CollapseModule,
    TabsModule
  } from 'ngx-bootstrap'
//Paginas↓
  import { FilterPageComponent } from './Pages/filter-page/filter-page.component';
  import { HistoryPageComponent } from './Pages/history-page/history-page.component';
  import { MainPageComponent } from './Pages/main-page/main-page.component';
  import { LoginPageComponent } from './Pages/login-page/login-page.component';
//Serviços↓
  import { AppRoutingModule } from './app.routing.module';
  import { CacheSrvService } from './Services/CacheSrv/cache-srv.service';
  import { AmazonSrvService } from './Services/AmazonSrv/amazon-srv.service';
  import {  HttpModule  } from '@angular/http';
  import { StorageService } from './Services/storage.service';
  import {HttpClientModule} from '@angular/common/http';
//Componentes↓
  import { HeaderComponent } from './Components/header/header.component';
  import { TabsComponent } from './Components/tabs/tabs.component';
  import { FooterComponent } from './Components/footer/footer.component';
  import { ListaJetOilComponent } from './Components/lista-jet-oil/lista-jet-oil.component';
  import { ListaPadariaComponent } from './Components/lista-padaria/lista-padaria.component';
  import { ListaBeerCaveComponent } from './Components/lista-beer-cave/lista-beer-cave.component';
//AngularMaterial↓
  import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  } from '@angular/material';
  import {CdkTableModule} from '@angular/cdk/table';
//DatePickers↓
  import {DpDatePickerModule} from 'ng2-date-picker';

//Angular tree↓
  import { TreeModule } from 'angular-tree-component';
  import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    HistoryPageComponent,
    FilterPageComponent,
    HeaderComponent,
    TabsComponent,
    FooterComponent,
    ListaJetOilComponent,
    ListaPadariaComponent,
    ListaBeerCaveComponent
  ],
  entryComponents:[
    HeaderComponent,
    TabsComponent,
    FooterComponent,
    ListaJetOilComponent,
    ListaPadariaComponent,
    ListaBeerCaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
//Ng's↓
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
//DatePickers↓
    DpDatePickerModule,
//AngularMaterial↓
  CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
//Tree↓
    TreeModule,
//Http↓
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
providers:[
  CacheSrvService,
  AmazonSrvService,
  StorageService],
 bootstrap: [AppComponent]
})
export class AppModule { }
