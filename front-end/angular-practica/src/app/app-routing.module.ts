import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { ResgistrarComponent } from './pages/resgistrar/resgistrar.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  { path: 'home', component: ResgistrarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'ventas', component: VentasComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
