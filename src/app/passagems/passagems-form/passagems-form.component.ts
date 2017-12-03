import { Component, OnInit } from '@angular/core';
import { PassagemsService, Passagem} from '../passagems.service';
import { PartidaDestinoService, Cidade } from '../../passageiros/partida-destino.service';
import { PassageirosService, Passageiro } from '../../passageiros/passageiros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-passagems-form',
  templateUrl: './passagems-form.component.html',
  styleUrls: ['./passagems-form.component.css'],
  providers: [PassagemsService,PartidaDestinoService, PassageirosService]
})
export class PassagemsFormComponent implements OnInit {
  private title = 'Nova passagem'
  private model: Passagem = new Passagem();
  private pas: any;
  private ci: any;
  private id: string;
  private nome: String;
  private cpf: String;
  private nome_cobrador: String;
  private data: Date;
  private valor: Number;
  private cidade_origem: string;
  private cidade_destino:string;

  constructor(
    private pass: PassagemsService,
    private cidades: PartidaDestinoService,
    private passageiros: PassageirosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ci = this.pass.listarTodos()
    this.passageiros.listarTodos().subscribe(data => {
      console.log(data);
      this.pas = data;
    })
    // this.pas = this.pass.listarTodos()

    this.route.params.subscribe(
      params => {
        if(params['id']){
          this.id = params['id'];
          //Buscamos o objeto para edição
          this.pass.obterPorId(this.id).subscribe(
            (existente: Passagem) => this.model = existente
          )

        }
      }
    )
    
    this.ci = this.cidades.listarTodos()
    // this.pas = this.passageiros.listarTodos()
    // this.ci = this.pas.listarTodos()
  }
  enviar(){
    this.pass.salvar(this.model).subscribe(
      function(dados){
        alert('Salvo com sucesso');
      },
      function(erro){
        // console.error(erro)
      }
    )
  }
}

