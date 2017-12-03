import { Component, OnInit } from '@angular/core';
import { PassagemsService } from '../passagems.service'

@Component({
  selector: 'app-passagems-listar',
  templateUrl: './passagems-listar.component.html',
  styleUrls: ['./passagems-listar.component.css'],
  providers:[PassagemsService]
})
export class PassagemsListarComponent implements OnInit {
  private titulo = 'Lista de passagens'
  private passagems : any

  constructor(private service: PassagemsService) { }

  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.passagems = dados)
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
