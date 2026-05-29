import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [FormsModule, RouterLink],
  templateUrl: './report.component.html',

  styleUrl: './report.component.scss'
})
export class ReportComponent {

  bug = {
    title: '',
    description: '',
    page: ''
  }

  constructor(private http: HttpClient) { }

  sendBug() {
    this.http.post('http://localhost:3000/report', this.bug)
      .subscribe({
        next: (res) => {
          console.log('Report enviado:', res);
          alert('Report enviado com sucesso!');
        },
        error: (err) => {
          console.log('Erro:', err);
          alert('Erro ao enviar report');
        }
      });
  }
}