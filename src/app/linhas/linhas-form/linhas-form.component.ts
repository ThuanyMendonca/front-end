import { Component, OnInit } from '@angular/core';
import { LinhasService, Linha } from '../linhas.service';
import { PartidaDestinoService, Cidade } from '../../passageiros/partida-destino.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-linhas-form',
  templateUrl: './linhas-form.component.html',
  styleUrls: ['./linhas-form.component.css'],
  // Não esquecer de colocar essa merda 
  providers:[LinhasService, PartidaDestinoService]
})
export class LinhasFormComponent implements OnInit {
  private title = 'Nova linha'
  private model: Linha = new Linha();
  private ci: any;
  private id: string;
  private partida: string;
  private dest:string;

  constructor(
    private lin: LinhasService,
    private cidades: PartidaDestinoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
    

  ngOnInit() {
    this.ci = this.lin.listarTodos()

    this.route.params.subscribe(
      //Se existir um parametro id, significa que queremos editando
      //um objeto já existente
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.lin.obterPorId(this.id).subscribe(
            (existente: Linha) => this.model = existente
          )

        }
      }
    )
    
    this.ci = this.cidades.listarTodos()
    
  }
  enviar(){
    this.lin.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        alert(erro);
      }
    )
  }
}


