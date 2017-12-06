import { Component, OnInit } from '@angular/core';
import { LinhasService } from '../linhas.service'

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas-listar.component.html',
  styleUrls: ['./linhas-listar.component.css'],
  //Não esquecer dessa merda
  providers:[LinhasService]
})
export class LinhasListarComponent implements OnInit {
  private titulo = 'Linhas'

  private linhas: any;

  constructor(private service: LinhasService) { }

  ngOnInit() {
      this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.linhas = dados )
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

