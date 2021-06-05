import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/models/Tema';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-theme-delete',
  templateUrl: './theme-delete.component.html',
  styleUrls: ['./theme-delete.component.css']
})
export class ThemeDeleteComponent implements OnInit {

  tema: Tema = new Tema()
idTema: number
  constructor(
    private temaService: ThemeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idTema = this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)
  }
findByIdTema(id: number){
  this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
  this.tema = resp })
}
apagar(){
  this.temaService.deleteTema(this.idTema).subscribe(() => {
    alert('Tema apagado com sucesso!')
    this.router.navigate(['/tema'])
  })
}
}
