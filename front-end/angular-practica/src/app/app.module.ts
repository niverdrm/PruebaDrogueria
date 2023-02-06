import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResgistrarComponent } from './pages/resgistrar/resgistrar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginacionPipe } from './pipes/paginacion.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PagventasPipe } from './pipes/pagventas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResgistrarComponent,
    ListarComponent,
    NavComponent,
    PaginacionPipe,
    ModalComponent,
    VentasComponent,
    PagventasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
