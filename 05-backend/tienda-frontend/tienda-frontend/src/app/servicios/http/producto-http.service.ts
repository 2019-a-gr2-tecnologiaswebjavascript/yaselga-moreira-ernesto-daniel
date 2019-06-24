import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Producto } from '../../dto/producto'

@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Producto');
    }
}
