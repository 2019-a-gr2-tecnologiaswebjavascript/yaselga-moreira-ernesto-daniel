import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class HttpSailsPrincipal<ClaseEntidad>{
    protected url:String = "http://localhost:1337";
    protected modelo:String = "";

    constructor(protected readonly httpClient:HttpClient,
        url:String,
        modelo:String,){
            this.url=url;
            this.modelo=modelo;
    }
    
    //CREAR
    crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
                    .post(url, nuevoRegistro)
                    .pipe(
                        map(
                            (datos)=>{
                                return datos as ClaseEntidad;
                        })
                    );
    }
    //Borrar

    //Actualizar

    //BuscarPorId

    //BuscarTodos
}

//RESTFUL -> METODOS "="

//CLASE -> Metodos Logica
//RESTFUL

//EXTEND de la clase
//USARLA