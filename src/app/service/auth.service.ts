import { UserLogin } from './../models/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) {}

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://bloguinholiz.herokuapp.com/usuario/entrar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://bloguinholiz.herokuapp.com/usuario/cadastrar', usuario)

  }
}

