import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesListarComponent } from './cidades-listar/cidades-listar.component';
import { CidadesFormComponent } from './cidades-form/cidades-form.component';

@NgModule({
  declarations: [
    CidadesListarComponent,
    CidadesFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CidadesListarComponent
  ]
})
export class CidadesModule { }
