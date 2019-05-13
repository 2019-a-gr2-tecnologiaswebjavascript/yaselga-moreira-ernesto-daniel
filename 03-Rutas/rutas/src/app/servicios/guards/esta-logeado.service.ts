import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { utf8Encode } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  

  constructor(private readonly _authService:AuthService, private readonly _router:Router) { }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const estaLogeado = this._authService.estaLogeado;
      if(estaLogeado){
        console.log('Bienbenido');
        return true;
      }else{
        const url = ['/home','app'];
        this._router.navigate(url);
        console.log();
        return false;
      }
}
}
