import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingModule } from '../app.routes';
import { LinhasListarComponent } from './linhas-listar/linhas-listar.component';
import { LinhasFormComponent } from './linhas-form/linhas-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LinhasListarComponent,
    LinhasFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LinhasListarComponent,
    LinhasFormComponent
  ]
})
export class LinhasModule { }
