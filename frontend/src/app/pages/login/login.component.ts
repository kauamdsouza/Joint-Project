import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

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
          console.log("Login Concluido")
          this.router.navigate(['/dashboard'])
        },

        error: (err) => {
          this.mensagemErro = err.error.message
        }

      })
  }



  login() {

    this.http.post(
      'http://localhost:3000/login',
      {
        name: this.user.name,
        password: this.user.password
      }
    )
      .subscribe({

        next: (res) => {

          console.log("Login Concluido")
          this.router.navigate(['/dashboard'])

        },

        error: (err) => {
          console.log(err.error.message)
          this.mensagemErro = err.error.message
        }



      })

  }

}