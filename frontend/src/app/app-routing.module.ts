import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TercerosPrincipalComponent } from './terceros/pages/terceros-principal/terceros-principal.component';

const routes: Routes = [

  {
    path: '', component: TercerosPrincipalComponent, pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
