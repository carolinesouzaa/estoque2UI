import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [
    { id: 1, nomeproduto: 'Base', valor: 45.99 },
    { id: 2, nomeproduto: 'Blush', valor: 20.00 },
    { id: 3, nomeproduto: 'Pó Compacto', valor: 30.50 },
    { id: 4, nomeproduto: 'Máscara de Cílios', valor: 35.90 },
    { id: 5, nomeproduto: 'Gloss', valor: 20.00 },
    { id: 6, nomeproduto: 'Iluminador', valor: 40.00 },
    { id: 7, nomeproduto: 'Bronzer', valor: 40.00 },
    { id: 8, nomeproduto: 'Delineador', valor: 25.90 },
    { id: 9, nomeproduto: 'Bruma', valor: 25.00 },
    { id: 10, nomeproduto: 'Corretivo', valor: 25.50 },
    { id: 11, nomeproduto: 'Óculos de Sol', valor: 150.90 },
    { id: 12, nomeproduto: 'Pulseira de Prata', valor: 100.00 },
    { id: 13, nomeproduto: 'Anel de Prata', valor: 89.90 },
    { id: 14, nomeproduto: 'Gargantilha de Prata', valor: 120.90 },
    { id: 15, nomeproduto: 'Pulseira de Ouro', valor: 200.00 },
    { id: 16, nomeproduto: 'Anel de Ouro', valor: 110.00 },
    { id: 17, nomeproduto: 'Gargantilha de Ouro', valor: 160.00 },
    { id: 18, nomeproduto: 'Shoulder Bag', valor: 125.90 },
    { id: 19, nomeproduto: 'Boné', valor: 40.50 },
    { id: 20, nomeproduto: 'Relógio', valor: 250.00 },
    { id: 21, nomeproduto: 'Tênis', valor: 350.00 },
    { id: 22, nomeproduto: 'Bota', valor: 150.00 },
    { id: 23, nomeproduto: 'Salto', valor: 135.90 },
    { id: 24, nomeproduto: 'Chinelo', valor: 50.00 },
    { id: 25, nomeproduto: 'Crocs', valor: 200.00 }
  ];

  displayedColumns= ['id', 'nomeproduto', 'valor']

  constructor() { }

  ngOnInit(): void {
  }

}
