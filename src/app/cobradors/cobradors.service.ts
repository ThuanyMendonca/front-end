import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Cobrador{
  public _id: String;
  public nome: String;
  public email: String;
}

@Injectable()
export class CobradorsService {

  constructor(private http: HttpClient) { }
  public listarTodos(){
    // console.log("OK");
      return this.http.get(environment.urlApi + '/cobradores');
    }

    public salvar(dados: Cobrador){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/cobradores/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/cobradores', dados)
      }      
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/cobradores/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/cobradores/' + id)
    }

}
