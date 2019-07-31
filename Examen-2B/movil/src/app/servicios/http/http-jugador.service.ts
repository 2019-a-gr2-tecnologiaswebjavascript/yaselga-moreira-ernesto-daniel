import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Jugador} from "../../dto/jugador";

@Injectable()
export class JugadorHttpService extends HttpPrincipal<Jugador>{

    constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
        super(_httpClient, environment.url, '/Jugador');
    }

}
