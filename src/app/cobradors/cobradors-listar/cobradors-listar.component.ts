import { Component, OnInit } from '@angular/core';
import { CobradorsService } from '../cobradors.service';

@Component({
  selector: 'app-cobradors-listar',
  templateUrl: './cobradors-listar.component.html',
  styleUrls: ['./cobradors-listar.component.css'],
  providers: [CobradorsService]
})
export class CobradorsListarComponent implements OnInit {
  private titulo = 'Cobradores'

  private cobradores: any;

  constructor(private service: CobradorsService) { }

  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista() {
    this.service.listarTodos().subscribe(dados =>{
      console.log(dados);
    this.cobradores = dados
    }
    )
  }

  excluir(id: string) {

    if (confirm('Deseja realmente excluir?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }
  }
}
