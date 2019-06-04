import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompraService} from "../../../../servcios/compra/compra.service";

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  listaCompras = this._compraService.listaCompras;

  @Output()
  quitoProducto:EventEmitter<number> = new EventEmitter();

  constructor(private readonly _compraService:CompraService) { }

  ngOnInit() {
  }

  quitar(plato){
    this._compraService.quitarProducto(plato);
    this.quitoProducto.emit(this._compraService.total);
    console.log("jugador quitado")
  }
}
