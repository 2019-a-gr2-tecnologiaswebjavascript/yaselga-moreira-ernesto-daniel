import { Component, OnInit } from '@angular/core';
import {Factura} from "../../dto/factura";
import {CarritoComprasService} from "../../servicios/carrito/carrito-compras.service";
import {Router} from "@angular/router";
import {JugadorHttpService} from "../../servicios/http/http-jugador.service";
import {Jugador} from "../../dto/jugador";
import {Detalle} from "../../dto/detalle";
import {FormControl, Validators} from "@angular/forms";
import {FacturaHttpService} from "../../servicios/http/htt-factura.service";
import {AuthHttpService} from "../../servicios/http/http-auth.service";
import {DetalleHttpService} from "../../servicios/http/http-detalle.service";
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {


  factura:Factura ={
      nombre:'',
      rucCedula:'',
      direccion:'',
      telefono:'',
      correo:'',
      total:0,
      detalles:[],
      fkUsuario:0
  };
  jugadores:Jugador[]=[];
  constructor(
      private readonly _carritoService:CarritoComprasService,
      private readonly _router:Router,
      private readonly _jugadorService:JugadorHttpService,
      private readonly _facturaService:FacturaHttpService,
      private readonly _detalleServie:DetalleHttpService,
      private readonly _authService:AuthHttpService,
  ) { }

  ngOnInit() {

  }


    formControl = new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.min(0),
    ]);

  protected cargarJugadores(){
        this._jugadorService.listar().subscribe(
            (jugadores)=>this.jugadores=jugadores,
            (error)=>console.log(error),
        )
  }

  ionViewWillEnter() {
        console.log("cargando jugadores(comprar)");
        this.cargarJugadores();
  }

  agregar(jugador:Jugador){
      this._carritoService.agregarCarrito(
          jugador
      );
  }

  obtenerTotal():number{
      return this._carritoService.total;
  }

  obtenerDetalles():Detalle[]{
      return this._carritoService.detalles;
  }


  // Generar Factura
  generarFactura(formulario){
      if(formulario.invalid || this.obtenerTotal()<=0){
          return;
      }
      let idFactura = 0;
      // Llamar al servicio de auth
      this.factura.fkUsuario=this._authService.usuario.id;
      //this.factura.fkUsuario=1;
      this.factura.total = this.obtenerTotal();
      //this.factura.jugadores = this._carritoService.listaGeneral;

      // PRIMERO CREAMOS LA FACTURA
      this._facturaService.crear(
          this.factura
      ).subscribe(
          (nuevo)=>{
              console.log(nuevo);
              idFactura = nuevo.id;
              // SEGUNDO SE CREAN LAS LINEAS DE DETALLE
              const detalles = this._carritoService.detalles;
              detalles.forEach(
                  (detalle)=>{
                      this._detalleServie.crear(
                          {
                              cantidad:detalle.cantidad,
                              fkFactura:idFactura,
                              fkJugador:detalle.fkJugador.id,
                          }
                      ).subscribe(
                          (nuevoDetalles)=>console.log(nuevoDetalles),
                          (error)=>console.log(error),
                      )
                  }
              )
          },
          (error)=>console.log(error),
          ()=>this._router.navigate(['/compras'])

      );

  }

  quitar(detalle:Detalle){
      this._carritoService.quitarUnidadDetalle(
          detalle,
      )
  }

}
