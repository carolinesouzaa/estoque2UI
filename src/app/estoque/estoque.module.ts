import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { ProdutoComponent } from './produto/produto.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MatTableModule
  ]
})
export class EstoqueModule { }
