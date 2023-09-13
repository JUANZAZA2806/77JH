import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Origen77jhComponent } from './components/layout/content/content_componestes77jh/origen77jh/origen77jh.component';
import { Destino77jhComponent } from './components/layout/content/content_componestes77jh/destino77jh/destino77jh.component';
import { Caracasjh77Component} from './components/layout/content/content_componestes77jh/caracasjh77/caracasjh77.component';
import { Home77jhComponent } from './components/layout/content/content_componestes77jh/home77jh/home77jh.component';
import { Madridjh77Component } from './components/layout/content/content_componestes77jh/madridjh77/madridjh77.component';
import { Moscujh77Component} from './components/layout/content/content_componestes77jh/moscujh77/moscujh77.component';

import { Newyorjh77Component } from './components/layout/content/content_componestes77jh/newyorjh77/newyorjh77.component';
import { Parisjh77Component } from './components/layout/content/content_componestes77jh/parisjh77/parisjh77.component';

import { Referenciasfjh77Component } from './components/layout/content/content_componestes77jh/referenciasfjh77/referenciasfjh77.component';
import { Viajerosjh77Component } from './components/layout/content/content_componestes77jh/viajerosjh77/viajerosjh77.component';
import { Viajesjh77Component } from './components/layout/content/content_componestes77jh/viajesjh77/viajesjh77.component';

const routes: Routes = [


  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:Home77jhComponent
  },
  {
    path: "destinos",
    component: Destino77jhComponent
  },
  {
    path: "viajeros",
    component: Viajerosjh77Component
  },
  {
    path: "familiares",
    component: Referenciasfjh77Component
  },
  {
    path:"newyork",
    component:Newyorjh77Component
  },
  
  {
    path:"viajes",
    component:Viajesjh77Component
  },
  

  {
    path:"caracas",
    component:Caracasjh77Component
  },
  {
    path: "madrid",
    component:Madridjh77Component
  },
  {
    path: "moscu",
   component:Moscujh77Component
  },
  {
    path: "paris",
    component: Parisjh77Component
  },
 








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
