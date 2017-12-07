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

  atualizarLista() {
    this.pass.listarTodos().subscribe(data => {
      console.log(data);
      this.pas = data;
    })
  }

  ngOnInit() {
    this.atualizarLista();
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

  excluir(id: string){
    
      if(confirm('Deseja realmente excluir?')){
        this.pass.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
    )  
      }    
  }
}

