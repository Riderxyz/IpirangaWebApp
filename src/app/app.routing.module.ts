import { CacheSrvService } from './Services/CacheSrv/cache-srv.service';
import { NgModule } from "@angular/core";
import { RouterModule, Router, Routes, CanActivate } from "@angular/router";

// Pages
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { HistoryPageComponent } from './Pages/history-page/history-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { FilterPageComponent } from './Pages/filter-page/filter-page.component';

const AppRoutes: Routes = [
    { path: 'home', component: MainPageComponent, canActivate: [CacheSrvService] },
    { path: 'login', component: LoginPageComponent },
    { path: 'historico', component: HistoryPageComponent, canActivate: [CacheSrvService] },
    { path: 'filtro', component: FilterPageComponent, canActivate: [CacheSrvService] },
    { path: '**', redirectTo: '/login'},
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            AppRoutes, { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule { }