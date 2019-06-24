import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-https.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda-frontend';
  constructor(private readonly _httpClient: HttpClient,
    private readonly _usuarioHttpService: UsuarioHttpService,
    private readonly _productoHttpService:ProductoHttpService,
    private readonly _productoUsuarioHttpService:ProductoUsuarioHttpService){

  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
    .crear({
      nombre:"Felipe",
      apellido:"Caicedo",
      cedula:'1718137159',
      correo:'eadepto@hotmail.com',
      estaCasado: false,
      username:'adrianeguez',
      sueldo: 120,
      tipoUsuario: 'normal'
    });
    const productoCrear$ = this._productoHttpService
    .crear({
      nombre:"Jabon",
      codigo:"2547"
    });

    const productoUsuarioCrear$ = this._productoUsuarioHttpService
      .crear({
        cantidad: 25,
        fkUsuario:1,
        fkProducto:1
      });
      productoUsuarioCrear$
      .subscribe(
        (nuevoProductoUsuario)=>{
          console.log(nuevoProductoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );

  productoCrear$
    .subscribe(
      (nuevoProducto)=>{
        console.log(nuevoProducto);
      },
      (error)=>{
        console.error(error);
      },
    );
    
    usuarioCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario);
      },
      (error)=>{
        console.error(error);
      },
    )

    const url = environment.url + "/Usuario";
    //http//:localhost:1337/Usuario
    const listaUsuarios$ =  this._httpClient.get(url);
    listaUsuarios$
    .subscribe(
      (datos)=>{console.log(datos);}
    ),
    (error)=>{console.log(error);
    }
  }
}
