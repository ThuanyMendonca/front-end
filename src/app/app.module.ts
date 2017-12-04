import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { LinhasModule } from './linhas/linhas.module';
import { LinhasService } from './linhas/linhas.service';

import { PagamentosModule } from './pagamentos/pagamentos.module';

import { PassageirosModule } from './passageiros/passageiros.module';
import { PassageirosService } from './passageiros/passageiros.service';

import { CidadesModule } from './cidades/cidades.module';
import { CidadesService } from './cidades/cidades.service';
// import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { CobradorsListarComponent } from './cobradors/cobradors-listar/cobradors-listar.component';
// import { CobradorsFormComponent } from './cobradors/cobradors-form/cobradors-form.component';

// import { PassagemsModule } from './passagems/passagems.module';
// import { PassagemsService } from './passagems/passagems.service';

import { CobradorsModule } from './cobradors/cobradors.module';
import { CobradorsService } from './cobradors/cobradors.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    CidadesModule,
    LinhasModule,
    PagamentosModule,
    PassageirosModule,
    LinhasModule,
    FormsModule,
    // PassagemsModule,
    CobradorsModule
  ],
  schemas: [],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
