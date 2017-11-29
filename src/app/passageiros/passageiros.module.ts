import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { PassageirosListarComponent } from './passageiros-listar/passageiros-listar.component';
import { PassageirosFormComponent } from './passageiros-form/passageiros-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PassageirosListarComponent,
    PassageirosFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PassageirosListarComponent,
    PassageirosFormComponent
  ]
})
export class PassageirosModule { }
