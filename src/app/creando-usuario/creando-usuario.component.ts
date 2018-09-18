import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UsuarioModel} from './../model/usuario.model';
import {CreandoUsuarioService} from './creando-usuario.service';
import {OK } from './../model/httpstatus';

@Component({
  selector: 'app-creando-usuario',
  templateUrl: './creando-usuario.component.html',
  styleUrls: ['./creando-usuario.component.css'],
  providers:[CreandoUsuarioService]
})
export class CreandoUsuarioComponent implements OnInit {
	
	private user: UsuarioModel;
	private isvalid:boolean=true;
	private mensaje:String="";
  constructor(private creandoUsuarioService:CreandoUsuarioService, private router:Router) { 
  		
     if(sessionStorage.getItem("user")){
        this.user=JSON.parse(sessionStorage.getItem("user"));
      }else{
          this.user=new UsuarioModel();
      }
  
   }

  ngOnInit() {
  }

  public saveOrUpdate():void{
      this.isvalid=this.creandoUsuarioService.validate(this.user);

      if(this.isvalid){
            this.creandoUsuarioService.saveOrUpdate(this.user).subscribe(res=>{
                if(res.responseCode==OK){
                  this.router.navigate(['/usuarioComponent']);
                }else{
                  this.mensaje=res.mensaje;
                  this.isvalid=false;
                }
            });
      }else{
        this.mensaje="los campos en el formulario son obligatorios";
      }
      sessionStorage.clear();
  }
}
