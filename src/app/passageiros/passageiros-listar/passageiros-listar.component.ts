import { Component, OnInit } from '@angular/core';
import { PassageirosService } from '../passageiros.service';


@Component({
  selector: 'app-passageiros-listar',
  templateUrl: './passageiros-listar.component.html',
  styleUrls: ['./passageiros-listar.component.css'],
  providers:[PassageirosService]
})
export class PassageirosListarComponent implements OnInit {
  //fazer listagem de vetor do banco de dados
  
  private titulo = 'Lista de passageiros'
  private passageiros : any
  
  // private passageiros
  constructor(private service: PassageirosService) { 
    
  }
    
  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.passageiros = dados)
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
