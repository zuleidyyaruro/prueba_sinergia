import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTerceroComponent } from './terceros/pages/crear-tercero/crear-tercero.component';
import { TercerosPrincipalComponent } from './terceros/pages/terceros-principal/terceros-principal.component';

const routes: Routes = [

  {
    path: '', component: TercerosPrincipalComponent, pathMatch: 'full'
  },
  {
    path: 'crear', component: CrearTerceroComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
