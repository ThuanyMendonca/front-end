import { Component, OnInit } from '@angular/core';
import {PagamentosService,Pagamento } from '../pagamentos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pagamentos-form',
  templateUrl: './pagamentos-form.component.html',
  styleUrls: ['./pagamentos-form.component.css'],
  providers: [PagamentosService]
})
export class PagamentosFormComponent implements OnInit {
  private title = 'Nova linha'
  private model: Pagamento = new Pagamento();
  private pa: any;
  private id: string;
  private valor: Number;
  private troco: Number;

  constructor(
    private pag: PagamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pa = this.pag.listarTodos()

    this.route.params.subscribe(
      //Se existir um parametro id, significa que queremos editando
      //um objeto já existente
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.pag.obterPorId(this.id).subscribe(
            (existente: Pagamento) => this.model = existente
          )

        }
      }
    )
    
    this.pa = this.pag.listarTodos()
    
  }
  enviar(){
    this.pag.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        alert(erro);
      }
    )
  }
  }
