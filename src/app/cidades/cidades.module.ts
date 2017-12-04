import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { CidadesListarComponent } from './cidades-listar/cidades-listar.component';
import { CidadesFormComponent } from './cidades-form/cidades-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CidadesListarComponent,
    CidadesFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CidadesListarComponent,
    CidadesFormComponent
  ]
})
export class CidadesModule { }
