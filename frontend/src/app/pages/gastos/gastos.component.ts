import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mapToCanActivate } from '@angular/router';

type Gasto = {
  nome: string;
  valor: number;
};

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss'
})
export class GastosComponent implements OnInit {


  nomeGasto = '';
  valorGasto: number | null = null;
  gastos: Gasto[] = [];
  total = 0;

  ngOnInit() {
    const dados = localStorage.getItem('gastos');
    if (dados) {
      this.gastos = JSON.parse(dados);
      this.calcularTotal();
    }
  }

  adicionarGasto() {
    if (!this.nomeGasto || !this.valorGasto) return;

    this.gastos.push({
      nome: this.nomeGasto,
      valor: this.valorGasto
    });

    this.salvar();
    this.calcularTotal();

    this.nomeGasto = '';
    this.valorGasto = null;
  }

  removerGasto(index: number) {
    this.gastos.splice(index, 1);
    this.salvar();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.gastos.reduce((soma, g) => soma + g.valor, 0);
  }

  salvar() {
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
  }

} 