import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TercerosPrincipalComponent } from './pages/terceros-principal/terceros-principal.component';
import { CrearTerceroComponent } from './pages/crear-tercero/crear-tercero.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedMaterialModule } from './components/shared-material.module';


@NgModule({
  declarations: [
    NavBarComponent,
    TercerosPrincipalComponent,
    CrearTerceroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedMaterialModule
  ],
  exports: [
    NavBarComponent,
    TercerosPrincipalComponent
  ]
})
export class TercerosModule { }
