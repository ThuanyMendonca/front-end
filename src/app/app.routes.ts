import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';

import { PassageirosListarComponent } from './passageiros/passageiros-listar/passageiros-listar.component'
import { PassageirosFormComponent } from './passageiros/passageiros-form/passageiros-form.component';

import { CidadesListarComponent } from './cidades/cidades-listar/cidades-listar.component';
import { CidadesFormComponent } from './cidades/cidades-form/cidades-form.component';

import { LinhasListarComponent } from './linhas/linhas-listar/linhas-listar.component';
import { LinhasFormComponent } from './linhas/linhas-form/linhas-form.component'

import { PagamentosListarComponent } from './pagamentos/pagamentos-listar/pagamentos-listar.component';
import { PagamentosFormComponent } from './pagamentos/pagamentos-form/pagamentos-form.component';

import { PassagemsFormComponent } from './passagems/passagems-form/passagems-form.component';
import { PassagemsListarComponent } from './passagems/passagems-listar/passagems-listar.component';

import { CobradorsFormComponent } from './cobradors/cobradors-form/cobradors-form.component';
import { CobradorsListarComponent } from './cobradors/cobradors-listar/cobradors-listar.component';
const routes : Routes = [
    //Rota raiz
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    //home
    {
        path: 'home',
        component: HomeComponent
    },
    //Rota passageiros
    {
        path: 'passageiros',
        component: PassageirosListarComponent
    },
    {
        path: 'cidades',
        component: CidadesListarComponent
    },
    {
        path: 'cidades/novo',
        component: CidadesFormComponent
    },
    {
        path: 'cidades/:id',
        component: CidadesFormComponent
    },
    {
        path:'linhas',
        component: LinhasListarComponent
    },
    {
        path:'pagamentos',
        component: PagamentosListarComponent
    },
    {
        path: 'pagamentos/novo',
        component: PagamentosFormComponent
    },
    {
        path: 'pagamentos/:id',
        component: PagamentosFormComponent
    },
    {
        path:'passageiros/novo',
        component: PassageirosFormComponent
    },
    {
        path:'passageiros/:id',
        component: PassageirosFormComponent
    },
    {
        path:'linhas/:id',
        component: LinhasFormComponent
    },
    {
        path:'linhas/novo',
        component: PassageirosFormComponent
    },
    
    {
        path: 'cobradores',
        component: CobradorsListarComponent
    },
    {
        path:'cobradores/novo',
        component: CobradorsFormComponent
    },
    {
        path: 'cobradores/:id',
        component: CobradorsFormComponent
    },
    {
        path: 'passagems',
        component: PassagemsListarComponent
    },
    {
        path: 'passagems/:id',
        component: PassagemsFormComponent
    },
    {
        path: 'passagems/novo',
        component: PassageirosFormComponent
    }


]

export const RoutingModule = RouterModule.forRoot(routes)