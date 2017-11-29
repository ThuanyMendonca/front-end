import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Linha{
  public _id: String;
  public linhas: String;
  public partida: String;
  public dest: String;
}

@Injectable()
export class LinhasService {
  constructor(private http: HttpClient) { }
  public listarTodos(){
      return this.http.get(environment.urlApi + '/linhas');
    }

    public salvar(dados: Linha){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/linhas/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/linhas', dados)
      }
      
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/linhas/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/linhas/' + id)
    }
}

