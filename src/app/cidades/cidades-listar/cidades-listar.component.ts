import { Component, OnInit } from '@angular/core';
//Faz requisições
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cidades-listar',
  templateUrl: './cidades-listar.component.html',
  styleUrls: ['./cidades-listar.component.css']
})
export class CidadesListarComponent implements OnInit {

  private titulo = 'Lista de cidades'

  private cidades
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/cidades')
    .subscribe(dados => this.cidades = dados)
    console.log(this.cidades);
   }  
    ngOnInit() {
  }

}
