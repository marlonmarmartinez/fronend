import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private usuariosService: UsuariosService,private router:Router ) { }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser():void{
  	this.usuariosService.getUsers().subscribe(res=>{
      this.users=res;

    });
  }
  public edit(user:UsuarioModel):void{
      sessionStorage.setItem('user',JSON.stringify(user));
      this.router.navigate(['/creandoUsuarioComponent']);
  }

  public deleteR(user:UsuarioModel):void{
      if(confirm("esta seguro de borrar el registro?")){
        this.usuariosService.deleteR(user)
    
      }
       this.loadUser();
  }

}
