import { Component, OnInit } from '@angular/core';
//Faz requisições
import { HttpClient } from '@angular/common/http';
import { CidadesService } from '../cidades.service';
@Component({
  selector: 'app-cidades-listar',
  templateUrl: './cidades-listar.component.html',
  styleUrls: ['./cidades-listar.component.css'],
  providers: [CidadesService]
})
export class CidadesListarComponent implements OnInit {

  private titulo = 'Lista de cidades'

  private cidades: any
  // constructor(private http: HttpClient) {
  //   this.http.get('http://localhost:3000/cidades')
  //   .subscribe(dados => this.cidades = dados)
  //   console.log(this.cidades);
  //  }  
  constructor(private service: CidadesService) { }
    ngOnInit() {
      this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.cidades = dados)
  }

  excluir(id: string){
    
      if(confirm('Deseja realmente excluir?')){
        this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
    )  
      }    
  }
  }
