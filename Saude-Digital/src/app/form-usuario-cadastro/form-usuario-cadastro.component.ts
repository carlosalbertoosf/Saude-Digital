import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-usuario-cadastro',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './form-usuario-cadastro.component.html',
  styleUrl: './form-usuario-cadastro.component.css',
})
export class FormUsuarioCadastroComponent implements OnInit {
  formUsuarioCadastro!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formUsuarioCadastro = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
    this.cadastrar();
  }
  cadastrar() {
    this.http
      .post<
        {
          nome: string;
          email: string;
          login: string;
          senha: string;
        }[]
      >(
        'http://172.16.81.150:3000/cadastro-usuario',
        this.formUsuarioCadastro.value
      )
      .subscribe({
        next: (response) => alert('Usuário cadastrado com sucesso!'),
        error: (error) => alert('Erro ao cadastrar o usuário!'),
      });
  }
}
