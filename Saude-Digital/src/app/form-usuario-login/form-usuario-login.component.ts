import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-usuario-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './form-usuario-login.component.html',
  styleUrl: './form-usuario-login.component.css'
})
export class FormUsuarioLoginComponent implements OnInit {
  formUsuarioLogin!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
      this.formUsuarioLogin = this.fb.group({
        login: ['', Validators.required],
        senha: ['', Validators.required]
      });
      this.entrar();
  }
  entrar(){
    this.http.post<{
      login: string;
      senha: string;
    }[]>('http://172.16.81.150:3000/cadastro-usuario', this.formUsuarioLogin.value)
    .subscribe({
      next: (response) => alert('Login realizado com sucesso'),
      error: (error) => alert('Dados incorretos, tente novamente!')
    })
  }
}
