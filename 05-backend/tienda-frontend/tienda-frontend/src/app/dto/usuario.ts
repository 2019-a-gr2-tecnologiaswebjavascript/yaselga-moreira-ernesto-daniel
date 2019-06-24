    
export interface Usuario {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombre: string;
    apellido: string;
    cedula: string;
    username: string;
    sueldo?: number;
    estaCasado?: boolean;
    tipoUsuario?: 'normal' | 'pendiente' | 'premium';
    correo?:string;
    arregloProductosUsuario?:any[]
}