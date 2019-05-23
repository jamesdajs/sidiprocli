import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcartsComponent } from './components/listcarts/listcarts.component';
import { CrearItemComponent } from './components/crear-item/crear-item.component';

const routes: Routes = [
  {path:'',component:ListcartsComponent},
  {path:'crear',component:CrearItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
