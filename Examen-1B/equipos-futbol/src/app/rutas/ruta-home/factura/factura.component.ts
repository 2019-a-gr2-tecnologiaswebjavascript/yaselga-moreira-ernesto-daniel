import { Component, OnInit } from '@angular/core';
import {FacturaService} from "../../../servcios/factura/factura.service";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  facturas = this._facturaService.facturas;
  nombreConsulta: string;
  constructor(
    private readonly _facturaService:FacturaService,
    ) { }

  buscarFactura(){
    if(this.nombreConsulta){
      this.facturas = this._facturaService.buscarFactura(this.nombreConsulta);
    }else {
      this.facturas = this._facturaService.facturas;
    }
  }

  ngOnInit() {
  }

}
