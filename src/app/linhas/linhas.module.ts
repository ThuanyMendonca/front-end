import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinhasListarComponent } from './linhas-listar/linhas-listar.component';
import { LinhasFormComponent } from './linhas-form/linhas-form.component';

@NgModule({
  declarations: [
    LinhasListarComponent,
    LinhasFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinhasListarComponent
  ]
})
export class LinhasModule { }
