import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { CobradorsFormComponent } from '../cobradors/cobradors-form/cobradors-form.component';
import { CobradorsListarComponent } from '../cobradors/cobradors-listar/cobradors-listar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CobradorsFormComponent,
    CobradorsListarComponent
  ],
  exports: [
    CobradorsListarComponent,
    CobradorsFormComponent
  ]
})
export class CobradorsModule { }
