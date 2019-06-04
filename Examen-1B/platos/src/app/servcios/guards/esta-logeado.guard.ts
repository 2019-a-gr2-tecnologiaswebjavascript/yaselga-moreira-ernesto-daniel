import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoGuard implements CanActivate {
  constructor(private readonly _authService:AuthService,  private readonly _router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this._authService.estaLogeado){
      //alert('Tienes permisos');
      return true
    }else {
      alert('No Tienes permisos');
      const url = ['/login'];
      this._router.navigate(url);
      return false;
    }
  }
  
}
