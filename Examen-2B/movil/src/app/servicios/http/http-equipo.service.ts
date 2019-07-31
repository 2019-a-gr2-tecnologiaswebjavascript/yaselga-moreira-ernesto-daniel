import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Equipo} from "../../dto/equipo";

@Injectable()
export class EquipoHttpService extends HttpPrincipal<Equipo>{

    constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
        super(_httpClient, environment.url, '/Equipo');
    }

}
