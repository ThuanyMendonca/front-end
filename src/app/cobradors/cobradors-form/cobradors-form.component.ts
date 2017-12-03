import { Component, OnInit } from '@angular/core';
import { CobradorsService, Cobrador } from '../cobradors.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cobradors-form',
  templateUrl: './cobradors-form.component.html',
  styleUrls: ['./cobradors-form.component.css'],
  providers:[CobradorsService]
})

export class CobradorsFormComponent implements OnInit {
  private title = 'Novo Cobrador'
  private model: Cobrador = new Cobrador();
  //ci
  private co: any;
  private id: string;
  private nome: string;
  private email:string;

  constructor(
    //lin
    private cob: CobradorsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.co = this.cob.listarTodos()

    this.route.params.subscribe(
      //Se existir um parametro id, significa que queremos editando
      //um objeto já existente
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.cob.obterPorId(this.id).subscribe(
            (existente: Cobrador) => this.model = existente
          )

        }
      }
    )
    this.co = this.cob.listarTodos()
    
  }
  enviar(){
    this.cob.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        alert(erro);
      }
    )
  }
}
