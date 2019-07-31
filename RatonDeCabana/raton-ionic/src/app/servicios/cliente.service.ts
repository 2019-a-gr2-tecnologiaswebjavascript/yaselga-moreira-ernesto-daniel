import { Injectable } from '@angular/core';
import { Cliente } from '../dto/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
    ) { }
  getUsers() {
      return this.http.get('https://randomuser.me/api/?results=25');
    }
}
