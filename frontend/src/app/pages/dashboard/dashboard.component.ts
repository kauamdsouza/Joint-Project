import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PokemonGameComponent } from '../pokemon-game/pokemon-game.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    CommonModule,
    PokemonGameComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {

  player = {
    x: 50,
    y: 50,
    size: 30,
    speed: 10
  };

  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  mostrarJogo = false;

  constructor(private router: Router) { }



  ngAfterViewInit() {
    const canvas = document.getElementById('game') as HTMLCanvasElement | null;

    if (!canvas) {
      console.log('Canvas não encontrado. Verifique se existe id="game" no HTML.');
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.log('Contexto 2D não encontrado.');
      return;
    }

    this.canvas = canvas;
    this.ctx = ctx;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') this.player.x += this.player.speed;
      if (event.key === 'ArrowLeft') this.player.x -= this.player.speed;
      if (event.key === 'ArrowUp') this.player.y -= this.player.speed;
      if (event.key === 'ArrowDown') this.player.y += this.player.speed;

      this.draw();
    });

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(
      this.player.x,
      this.player.y,
      this.player.size,
      this.player.size
    );
  }

  logout() {
    this.router.navigate(['home']);
  }

  report() {
    this.router.navigate(['report']);
  }

  abrirJogo() {
    this.mostrarJogo = true;
  }
}