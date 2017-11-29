import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos-listar.component.html',
  styleUrls: ['./pagamentos-listar.component.css']
})
export class PagamentosListarComponent implements OnInit {

  private titulo = 'Pagamentos'

  private pagamentos
  constructor(private http: HttpClient) { 
    
    this.http.get('http://localhost:3000/pagamentos')
    .subscribe(dados => this.pagamentos = dados)
    console.log(this.pagamentos);
  }

  ngOnInit() {
  }

}
