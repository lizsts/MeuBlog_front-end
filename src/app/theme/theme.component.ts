import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../models/Tema';
import { ThemeService } from './../service/theme.service';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: ThemeService
    

  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar']) 
    }
    this.findAllTemas()
  }
  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }
cadastrar(){
  this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
    this.tema = resp
    alert('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.tema = new Tema()
  })
}
}
