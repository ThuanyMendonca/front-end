import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Cidade{
  public _id: String;
  public cidade: String;
  public cidade_origem: String;
  public cidade_destino: String;
}

@Injectable()
export class PartidaDestinoService {

  constructor(private http: HttpClient) { }
  
  listarTodos(){
     return this.http.get(environment.urlApi + '/cidades');
   }

}
