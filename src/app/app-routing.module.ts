import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {UsuariosComponent} from './usuarios/usuarios.component';

const routes:Routes=[
{path:'',redirectTo:'/usuarioComponent',pathMatch:'full'},
{path:'appComponent',component: AppComponent},
{path:'usuarioComponent',component: UsuariosComponent}
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule],
	
})

export class AppRoutingModule{}
