import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-game',
  imports: [CommonModule],
  templateUrl: './pokemon-game.component.html',
  styleUrl: './pokemon-game.component.scss'
})
export class PokemonGameComponent implements OnInit {

  pokemon: any;

  resultado = '';
  escolhaPlayer = '';
  escolhaPokemon = '';

  acaoPlayer = '';
  acaoPokemon = '';

  opcoes = ['Pedra', 'Papel', 'Tesoura'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    this.http.get('http://localhost:3000/pokemon/random').subscribe({
      next: (dados: any) => {
        this.pokemon = {
          nome: dados.nome,
          imagem: dados.imagem
        };
      },

      error: (err) => {
        console.log('Erro ao buscar Pokémon:', err);
      }
    });
  }

  getIcone(escolha: string) {
    if (escolha === 'Pedra') return '🪨';
    if (escolha === 'Papel') return '📄';
    if (escolha === 'Tesoura') return '✂️';
    return '';
  }

  jogar(playerChoice: string) {
    this.escolhaPlayer = playerChoice;

    const numeroAleatorio = Math.floor(Math.random() * this.opcoes.length);
    this.escolhaPokemon = this.opcoes[numeroAleatorio];

    this.acaoPlayer = playerChoice;
    this.acaoPokemon = this.escolhaPokemon;

    setTimeout(() => {
      this.acaoPlayer = '';
      this.acaoPokemon = '';
    }, 900);

    if (this.escolhaPlayer === this.escolhaPokemon) {
      this.resultado = 'Empate!';
    }
    else if (
      this.escolhaPlayer === 'Pedra' && this.escolhaPokemon === 'Tesoura' ||
      this.escolhaPlayer === 'Papel' && this.escolhaPokemon === 'Pedra' ||
      this.escolhaPlayer === 'Tesoura' && this.escolhaPokemon === 'Papel'
    ) {
      this.resultado = `Incrível! Você venceu o ${this.pokemon.nome}!`;
    }
    else {
      this.resultado = `O ${this.pokemon.nome} Te detonaram amigão!`;
    }
  }

  novoPokemon() {
    this.resultado = '';
    this.escolhaPlayer = '';
    this.escolhaPokemon = '';
    this.acaoPlayer = '';
    this.acaoPokemon = '';
    this.getRandomPokemon();
  }
}