import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Cidade{
  public _id: String;
  public cidades: String;
  public estado: String;
}
@Injectable()
export class CidadesService {

  constructor(private http: HttpClient) { }

  public listarTodos(){
      return this.http.get(environment.urlApi + '/cidades');
    }

    public salvar(dados: Cidade){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/cidades/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/cidades', dados)
      }
      
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/cidades/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/cidades/' + id)
    }
}
