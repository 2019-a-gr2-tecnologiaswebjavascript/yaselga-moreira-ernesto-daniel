import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Detalle} from "../../dto/detalle";

@Injectable()
export class DetalleHttpService extends HttpPrincipal<Detalle>{

    constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
        super(_httpClient, environment.url, '/Detalle');
    }

}