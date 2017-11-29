import { Component, OnInit } from '@angular/core';
import { PassageirosService, Passageiro } from '../passageiros.service';
import { PartidaDestinoService, Cidade } from '../partida-destino.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passageiros-form',
  templateUrl: './passageiros-form.component.html',
  styleUrls: ['./passageiros-form.component.css'],
  providers: [PassageirosService,PartidaDestinoService]
})
export class PassageirosFormComponent implements OnInit {
  private title = 'Novo passageiro'
  private model: Passageiro = new Passageiro();
  private ci: any;
  private id: string;
  private cidade_origem: string;
  private cidade_destino:string;
  constructor(
    private pas: PassageirosService,
    // private linhas: PartidaDestinoService
    private cidades: PartidaDestinoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ci = this.pas.listarTodos()

    this.route.params.subscribe(
      //Se existir um parametro id, significa que queremos editando
      //um objeto já existente
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.pas.obterPorId(this.id).subscribe(
            (existente: Passageiro) => this.model = existente
          )

        }
      }
    )
    
    this.ci = this.cidades.listarTodos()
    
  }
  enviar(){
    this.pas.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        // console.error(erro)
      }
    )
  }
}
