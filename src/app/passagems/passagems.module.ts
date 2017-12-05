import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { PassagemsListarComponent } from './passagems-listar/passagems-listar.component';
import { PassagemsFormComponent } from './passagems-form/passagems-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PassagemsListarComponent,
    PassagemsFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PassagemsListarComponent,
    PassagemsFormComponent
  ]
})
export class PassagemsModule { }
