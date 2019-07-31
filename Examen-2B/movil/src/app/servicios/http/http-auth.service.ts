import {Auth, Usuario} from "../../dto/usuario";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthHttpService {
    url:string =  environment.url;
    usuario:Usuario;
    estaLogeado = false;
    constructor(private readonly _httpClient:HttpClient,
                private readonly _router:Router)
    {}

    login(auth:Auth){
        const  url = `${this.url}/login`;

        return this._httpClient.post(url, auth).pipe(
            map(
                (datos:Respuesta)=>{
                    if(datos){
                        if(datos.error){
                            this.estaLogeado = false;
                            this._router.navigate(['/login']);

                        }else {
                            this.estaLogeado = true;
                            this.usuario = datos.usuario;
                            // Llamar al almacenamiento local
                            const url = ['/inicio'];
                            this._router.navigate(url);
                        }

                    }
                }
            )
        );
    }

    logout(){
        this.estaLogeado = false;
        const url = ['/login'];
        this._router.navigate(url);
    }

}

interface Respuesta {
    mensaje:string;
    error?:number;
    usuario?:Usuario;
}
