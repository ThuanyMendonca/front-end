import { Component, OnInit } from '@angular/core';
import { PassagemsService, Passagem} from '../passagems.service';
import { PartidaDestinoService, Cidade } from '../../passageiros/partida-destino.service';
import { PassageirosService, Passageiro } from '../../passageiros/passageiros.service';
import { CobradorsService,Cobrador } from '../../cobradors/cobradors.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-passagems-listar',
  templateUrl: './passagems-listar.component.html',
  styleUrls: ['./passagems-listar.component.css'],
  providers: [PassagemsService,PartidaDestinoService, PassageirosService, CobradorsService]
})
export class PassagemsListarComponent implements OnInit {
  private title = 'Nova passagem'
  private model: Passagem = new Passagem();
  private cob: any;
  private pas: any;
  private ci: any;
  private passag: any;
  private id: string;
  private nome: String;
  private cpf: String;
  private nome_cobrador: String;
  private id_cobrador: String;
  private data: Date;
  // private valor: Number;
  private cidade_origem: string;
  private cidade_destino:string;
  
  constructor(
    private pass: PassagemsService,
    private cidades: PartidaDestinoService,
    private passageiros: PassageirosService,
    private cobradores: CobradorsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.ci = this.pass.listarTodos()

    this.passageiros.listarTodos().subscribe(data => {
      // console.log(data);
      this.pas = data;
    })

    this.cobradores.listarTodos().subscribe(data => {
      // console.log(data)
      this.cob = data;
    })

    // this.cidades.listarTodos().subscribe(data => {
    //   // console.log(data);
    //   this.ci = data;
    // // })
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
    
    // this.ci = this.cidades.listarTodos()
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

