import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Pagamento{
  public _id: String;
  public valor: Number;
  public troco: Number;
}

@Injectable()
export class PagamentosService {
constructor(private http: HttpClient) { }
  public listarTodos(){
      return this.http.get(environment.urlApi + '/pagamentos');
    }

    public salvar(dados: Pagamento){
      console.log(dados);
      if(dados._id){
        return this.http.put('http://localhost:3000/pagamentos/' + dados._id, dados)
      }
      else{
        return this.http.post('http://localhost:3000/pagamentos', dados)
      }
      
    }
    public obterPorId(id: string){
      return this.http.get('http://localhost:3000/pagamentos/' + id)
    }

    public excluir(id: string){
      return this.http.delete('http://localhost:3000/pagamentos/' + id)
    }

}
