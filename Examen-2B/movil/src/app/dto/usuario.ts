export interface Usuario {
    id?:number,
    nombre?:string,
    correo?:string,
    clave?:string,
}

export interface Auth {
    correo:string,
    clave:string,
}