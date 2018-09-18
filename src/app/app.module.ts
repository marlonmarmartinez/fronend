import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreandoUsuarioComponent } from './creando-usuario/creando-usuario.component';
import {UsuariosService} from './usuarios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CreandoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
