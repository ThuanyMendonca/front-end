import { Component, OnInit } from '@angular/core';
import { PagamentosService } from '../pagamentos.service';


@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos-listar.component.html',
  styleUrls: ['./pagamentos-listar.component.css'],
  providers: [PagamentosService]
})
export class PagamentosListarComponent implements OnInit {

  private titulo = 'Pagamentos'

  private pagamentos: any;
  constructor(private service: PagamentosService) { 
  }

  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.pagamentos = dados)
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
