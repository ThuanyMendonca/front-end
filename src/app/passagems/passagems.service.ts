import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Passagem{
  public _id: String;
  public nome: String;
  public cpf: String;
  public nome_cobrador: String;
  public cidade: String;
  public linha: String;
  public valor: Number;
  public data: Date;
  public cidade_origem: String;
  public cidade_destino: String;
}


@Injectable()
export class PassagemsService {

  constructor(private http: HttpClient) { }

  public listarTodos(){
      return this.http.get(environment.urlApi + '/passagems');
    }

    public salvar(dados: Passagem){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/passagems/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/passagems', dados)
      }
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/passagems/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/passagems/' + id)
    }

}
