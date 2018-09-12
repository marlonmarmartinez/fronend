import { Component, OnInit } from '@angular/core';

import {UsuarioModel} from './../model/usuario.model';
import {UsuariosService} from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UsuariosService]
})
export class UsuariosComponent implements OnInit {

private users:Array<UsuarioModel>;

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser():void{
  	this.usuariosService.getUsers().subscribe(res=>{
      this.users=res;

    });
  }

}
