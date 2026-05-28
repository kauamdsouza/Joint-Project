import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  mensagemErro = ''

  user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser() {

    this.http.post(
      'http://localhost:3000/users',
      this.user
    )
      .subscribe({

        next: (res) => {

          this.mensagemErro = ''

          console.log('Sucesso:', res)

          this.router.navigate(['/login'])

        },

        error: (err) => {

          console.log('Erro completo:', err)

          this.mensagemErro = err.error.mensagem

        }

      })

  }

}