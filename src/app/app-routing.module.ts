import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SidenavComponent } from './component/backoffice/sidenav/sidenav.component';
import { DashboardComponent } from './component/backoffice/dashboard/dashboard.component';
import { ContabilidadComponent } from './component/backoffice/contabilidad/contabilidad.component';
import { ClientesComponent } from './component/backoffice/clientes/clientes.component';
import { NotificacionComponent } from './component/backoffice/notificacion/notificacion.component';
import { NuevaNotificacionComponent } from './component/backoffice/notificacion/nueva-notificacion/nueva-notificacion.component';
import { ScancameraComponent } from './component/scancamera/scancamera.component';
import { NuevoRegistroComponent } from './component/scancamera/nuevo-registro/nuevo-registro.component';
import { RegistroComponent } from './component/registro/registro.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registro_back', component:RegistroComponent},
  { path: 'backoffice', component: SidenavComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'economy', component: ContabilidadComponent},
    { path: 'clientes', component: ClientesComponent},
    { path: 'notificacion', component: NotificacionComponent},
    { path: 'nueva-notificacion', component: NuevaNotificacionComponent},
    { path: 'scanner', component: ScancameraComponent},
    { path: 'nueva-venta/:idcliente', component: NuevoRegistroComponent},


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
