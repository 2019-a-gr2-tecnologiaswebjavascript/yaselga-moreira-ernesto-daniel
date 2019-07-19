import { HttpSailsPrincipal } from './http-sails-principal';
import { Usuario } from 'src/app/dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Usuario');
    }
}

// 1) Buscar usuario nombre 'Adrian'
// http://localhost:1337/Usuario?nombre=Adrian

// 2) Buscar usuario nombre 'Adrian' y la cedula '1718137159'
// http://localhost:1337/Usuario?nombre=Adrian&cedula=1718137159

// 3) Traer los 3 primeros usuarios
// http://localhost:1337/Usuario?limit=3

// 4) Traer los 3 primeros usuarios despues de los 9 primeros usuarios
// http://localhost:1337/Usuario?limit=3&skip=9

// 5) Traer usuarios ordenados por nombre
// http://localhost:1337/Usuario?sort=nombre
// http://localhost:1337/Usuario?sort=nombre ASC
// http://localhost:1337/Usuario?sort=nombre DESC


// https://sailsjs.com/documentation/concepts/models-and-orm/query-language


// 5) Traer usuario que contenga las letras 'vic'
// http://localhost:1337/Usuario?where={"nombre":{"contains":"vic"}}

// 6) Traer usuario que tenga sueldo menor a 3000
// http://localhost:1337/Usuario?where={"sueldo":{"<":3000}}

// 7) Traer los correos que sean de gmail
// http://localhost:1337/Usuario?where={"correo":{"endsWith":"gmail.com"}}