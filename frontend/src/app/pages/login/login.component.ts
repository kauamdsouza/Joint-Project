import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario = {
    nome: '',
    email: '',
    senha: ''
  }

  constructor(private http: HttpClient) { }

  criarUsuario() {

    this.http.post(
      'http://localhost:3000/users',
      this.usuario
    )
      .subscribe({
        next: (res) => {
          console.log('Sucesso:', res)
        },

        error: (err) => {
          console.log('Erro:', err)
        }
      })

  }

}