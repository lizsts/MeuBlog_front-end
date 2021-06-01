import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 usuario: Usuario  = new Usuario()
 confirmSenha: string 
 tipoUsuario: string

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  checkSenha(event: any){
    this.confirmSenha = event.target.value

  }
  
  tipoUser(event: any) {
this.tipoUsuario = event.target.value

  }

 cadastrar() {
   this.usuario.tipoUser = this.tipoUsuario

   if(this.usuario.senha != this.confirmSenha){
alert('As senhas não correspondem.')
   } else {
this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
  this.usuario = resp
  this.router.navigate(['/entrar'])
  alert('Usuário cadastrado com sucesso!')
})
   }

 }

}
