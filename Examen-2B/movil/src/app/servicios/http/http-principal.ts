import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export class HttpPrincipal<ClaseEntidad>{
    protected url:string = "";
    protected modelo:string = "";

    constructor(
        protected readonly httpclient:HttpClient,
        url:string,
        modelo:string,
    ) {
        this.url = url;
        this.modelo = modelo;
    }

    // Crear
    crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad>{
        const  url = `${this.url}${this.modelo}`;
        return this.httpclient.post(url, nuevoRegistro).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad;
                }
            )
        );
    }

    //Listar
    listar():Observable<ClaseEntidad[]>{
        const  url = `${this.url}${this.modelo}`;
        return this.httpclient.get(url).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad[];
                }
            )
        );
    }

    // Borrar
    borrar(id:number):Observable<ClaseEntidad>{
        const  url = `${this.url}${this.modelo}/${id}`;
        return this.httpclient.delete(url).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad;
                }
            )
        );
    }

    // Actualizar
    actualizar(modificadoRegistro:ClaseEntidad,id:number):Observable<ClaseEntidad>{
        const  url = `${this.url}${this.modelo}/${id}`;
        return this.httpclient.put(url,modificadoRegistro).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad;
                }
            )
        );
    }

    // Buscar por ID
    buscar(id:number):Observable<ClaseEntidad>{
        const  url = `${this.url}${this.modelo}/${id}`;
        return this.httpclient.get(url).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad;
                }
            )
        );
    }

    buscarParametro(filtro:any):Observable<ClaseEntidad[]>{
        const  url = `${this.url}${this.modelo}?where=`+JSON.stringify(filtro);
        console.log(url);
        return this.httpclient.get(url).pipe(
            map(
                (datos)=>{
                    return datos as ClaseEntidad[];
                }
            )
        );
    }
}
