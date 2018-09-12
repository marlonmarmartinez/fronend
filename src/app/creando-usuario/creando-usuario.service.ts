import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import  {HttpClient} from '@angular/common/http';


import {RestResponse} from './../model/restResponse.model';
import {UsuarioModel} from './../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CreandoUsuarioService {

  constructor(private http:HttpClient) { }

  /**
  *metodo que valida los campos 
  *@param user
  */

  public validate(user:UsuarioModel):boolean{
  	let isvalid=true;
  		if(!user.pNombre){
  			isvalid=false;
  		}
  		if(!user.sNombre){
  			isvalid=false;
  		}
  		if(!user.pApellido){
  			isvalid=false;
  		}
  		if(!user.sApellido){
  			isvalid=false;
  		}
  		if(!user.telefono){
  			isvalid=false;
  		}
  		if(!user.direccion){
  			isvalid=false;
  		}

  	return isvalid;
  }

  public saveOrUpdate(user:UsuarioModel):Observable<RestResponse>{
  	return	this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
  }
}
