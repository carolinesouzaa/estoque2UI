import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria [] = [
    { id: 1, categoria: 'Maquiagem' },
    { id: 2, categoria: 'Acessório' },
    { id: 3, categoria: 'Sapato' },
  ];

  displayedColumns: string[] = ['id', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
