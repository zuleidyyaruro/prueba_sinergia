import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TercerosPrincipalComponent } from './pages/terceros-principal/terceros-principal.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedMaterialModule } from './components/shared-material.module';
import { DialogTercerosComponent } from './pages/dialog-terceros/dialog-terceros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppConfirmService } from './services/app-confirm/app-confirm.service';



@NgModule({
  declarations: [
    NavBarComponent,
    TercerosPrincipalComponent,
    DialogTercerosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    TercerosPrincipalComponent,

  ],
  providers: [
    AppConfirmService
  ]
})
export class TercerosModule { }
