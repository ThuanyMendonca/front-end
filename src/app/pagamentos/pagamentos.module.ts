import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { PagamentosListarComponent } from './pagamentos-listar/pagamentos-listar.component';
// import { PagamentosFormComponent } from './pagamentos-form/pagamentos-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PagamentosFormComponent } from './pagamentos-form/pagamentos-form.component';



@NgModule({
  declarations: [
    PagamentosListarComponent,
    PagamentosFormComponent,
    // PagamentosFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
    

  ],
  exports: [
    PagamentosListarComponent,
    // PagamentosFormComponent
  ]
})
export class PagamentosModule { }