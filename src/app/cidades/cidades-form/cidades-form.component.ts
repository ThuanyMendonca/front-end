import { Component, OnInit } from '@angular/core';
import { CidadesService, Cidade } from '../cidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cidades-form',
  templateUrl: './cidades-form.component.html',
  styleUrls: ['./cidades-form.component.css'],
  providers:[CidadesService]
})
export class CidadesFormComponent implements OnInit {
  private title = 'Nova cidade'
  private model: Cidade = new Cidade();
  private cid: any;
  private id: string;
  private cidade: string;
  private estado:string;

  constructor(
    private cidades: CidadesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cid = this.cidades.listarTodos()

    this.route.params.subscribe(
      //Se existir um parametro id, significa que queremos editando
      //um objeto já existente
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.cidades.obterPorId(this.id).subscribe(
            (existente: Cidade) => this.model = existente
          )

        }
      }
    )
    
    this.cid = this.cidades.listarTodos()
    
  }
  enviar(){
    this.cidades.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        alert(erro);
      }
    )
  }
}
