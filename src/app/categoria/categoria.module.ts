import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
