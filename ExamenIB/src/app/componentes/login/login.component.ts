import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  constructor(private readonly _loginservice: LoginService) { }

  ngOnInit() {
  }

  guardar(puerta){
    console.log(puerta);
    this._loginservice.login(this.usuario);
    this.usuario = puerta.controls.usuario.value;
    console.log(this.usuario);
    alert('Bienvenido');
    this._loginservice.login(this.usuario)
  }

}
