import { Component } from '@angular/core';
// import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passagem Ônibus';
  author = 'Thuany Mendonça';

  // mostrarMenu: boolean = false;

  // constructor(private authService: AuthService){

  // }
  ngOnInit(){
    // this.authService.mostrarMenuEmitter.subscribe(
    //   mostrar => this.mostrarMenu = mostrar
    // );  
  }
}

