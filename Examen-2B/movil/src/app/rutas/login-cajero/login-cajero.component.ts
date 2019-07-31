import { Component, OnInit } from '@angular/core';
import {Auth} from "../../dto/usuario";
import {AuthHttpService} from "../../servicios/http/http-auth.service";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-login-cajero',
  templateUrl: './login-cajero.component.html',
  styleUrls: ['./login-cajero.component.scss'],
})
export class LoginCajeroComponent implements OnInit {

  auth:Auth = {correo:'',clave:''};
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    nombreClaveFormControl = new FormControl('', [
        Validators.required,
    ]);
  constructor(
      private readonly _authHttpService:AuthHttpService,
      private readonly _router:Router,
  ) { }

  ngOnInit() {}

  login(formulario){
      if(formulario.invalid){
          return
      }
      console.log("Login: ",this.auth);
      this._authHttpService.login(
          this.auth
      ).subscribe(
          (usuario)=>{
              // Llamar al guard
              this._router.navigate(['/equipos'])
          },
          (error)=>{
              console.log(error);
          }
      )
  }
}
