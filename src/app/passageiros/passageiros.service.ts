import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

//Classe que representa o model no front-end
export class Passageiro{
  public _id: String;
  public nome: String;
  public cpf: String;
  public celular: String;
  public cidade: String;
  public cidade_origem: String;
  public cidade_destino: String;
}

@Injectable()
export class PassageirosService {

  constructor(private http: HttpClient) {}

    public listarTodos(){
      return this.http.get(environment.urlApi + '/passageiros');
    }

    public salvar(dados: Passageiro){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/passageiros/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/passageiros', dados)
      }
      
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/passageiros/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/passageiros/' + id)
    }

}