import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas-listar.component.html',
  styleUrls: ['./linhas-listar.component.css']
})
export class LinhasListarComponent implements OnInit {
  private titulo = 'Linhas'

  private linhas

  constructor(private http: HttpClient) { 
    
    this.http.get('http://localhost:3000/linhas')
    .subscribe(dados => this.linhas = dados)
    console.log(this.linhas);
  }

  ngOnInit() {
  }

}
