import { Injectable } from '@angular/core';
import {AuthHttpService} from "../http/http-auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService {
    constructor(private readonly _authService:AuthHttpService,  private readonly _router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        if(this._authService.estaLogeado){
            //alert('Tienes permisos');
            return true
        }else {
            console.log('No Tienes permisos');
            const url = ['/login'];
            this._router.navigate(url);
            return false;
        }
    }
}
