import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    Viajerosjh77Component,
    FooterComponent,
    ContentComponent,
    Home77jhComponent,
    Origen77jhComponent,
    Madridjh77Component,
    Viajesjh77Component,
    Caracasjh77Component,
    Newyorjh77Component,
    Referenciasfjh77Component,
    Parisjh77Component,
    Moscujh77Component,
    Destino77jhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    // TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
