import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioModel} from './../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private http:HttpClient) { }

  public getUsers():Observable<UsuarioModel[]>{

  	return	this.http.get<UsuarioModel[]>("http://localhost:8080/getUsers");
  	
  }
   public deleteR(user:UsuarioModel):void{
    this.http.post("http://localhost:8080/deleteUsers",JSON.stringify(user)).subscribe();
  		
  		
  }
}
