import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [
    { id: 1, nomeproduto: 'Base', categoria: 'Maquiagem', valor: 45.99 },
    { id: 2, nomeproduto: 'Blush', categoria: 'Maquiagem', valor: 20.00 },
    { id: 3, nomeproduto: 'Pó Compacto', categoria: 'Maquiagem', valor: 30.50 },
    { id: 4, nomeproduto: 'Máscara de Cílios', categoria: 'Maquiagem', valor: 35.90 },
    { id: 5, nomeproduto: 'Gloss', categoria: 'Maquiagem', valor: 20.00 },
    { id: 6, nomeproduto: 'Iluminador', categoria: 'Maquiagem', valor: 40.00 },
    { id: 7, nomeproduto: 'Bronzer', categoria: 'Maquiagem', valor: 40.00 },
    { id: 8, nomeproduto: 'Delineador', categoria: 'Maquiagem', valor: 25.90 },
    { id: 9, nomeproduto: 'Bruma', categoria: 'Maquiagem', valor: 25.00 },
    { id: 10, nomeproduto: 'Corretivo', categoria: 'Maquiagem', valor: 25.50 },
    { id: 11, nomeproduto: 'Óculos de Sol', categoria: 'Acessório', valor: 150.90 },
    { id: 12, nomeproduto: 'Pulseira de Prata', categoria: 'Acessório', valor: 100.00 },
    { id: 13, nomeproduto: 'Anel de Prata', categoria: 'Acessório', valor: 89.90 },
    { id: 14, nomeproduto: 'Gargantilha de Prata', categoria: 'Acessório', valor: 120.90 },
    { id: 15, nomeproduto: 'Pulseira de Ouro', categoria: 'Acessório', valor: 200.00 },
    { id: 16, nomeproduto: 'Anel de Ouro', categoria: 'Acessório', valor: 110.00 },
    { id: 17, nomeproduto: 'Gargantilha de Ouro', categoria: 'Acessório', valor: 160.00 },
    { id: 18, nomeproduto: 'Shoulder Bag', categoria: 'Acessório', valor: 125.90 },
    { id: 19, nomeproduto: 'Boné', categoria: 'Acessório', valor: 40.50 },
    { id: 20, nomeproduto: 'Relógio', categoria: 'Acessório', valor: 250.00 },
    { id: 21, nomeproduto: 'Tênis', categoria: 'Sapato', valor: 350.00 },
    { id: 22, nomeproduto: 'Bota', categoria: 'Sapato', valor: 150.00 },
    { id: 23, nomeproduto: 'Salto', categoria: 'Sapato', valor: 135.90 },
    { id: 24, nomeproduto: 'Chinelo', categoria: 'Sapato', valor: 50.00 },
    { id: 25, nomeproduto: 'Crocs', categoria: 'Sapato', valor: 200.00 }
  ];

  displayedColumns= ['id', 'nomeproduto', 'categoria', 'valor']

  constructor() { }

  ngOnInit(): void {
  }

}
