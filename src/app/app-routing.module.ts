import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'estoque'
  },
  {
    path:'estoque', loadChildren:() => import('./estoque/estoque.module').then(m=>m.EstoqueModule)
  },
  {
    path:'categoria', loadChildren:() => import('./categoria/categoria.module').then(c=>c.CategoriaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
