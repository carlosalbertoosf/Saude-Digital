import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-usuario',
  imports: [],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent implements OnInit {
formUsuario!: FormGroup;

constructor(private fb: FormBuilder, private http: HttpClient){}

ngOnInit(): void {
  this.formUsuario = this.fb.group({
    nome: ['', Validators.required],
    email: ['', Validators.required],
    login: ['', Validators.required],
    senha: ['', Validators.required]
  });
  this.cadastrar();
}
cadastrar(){
  this.http.post<{
    nome: string;
    email: string;
    login: string;
    senha: string
  }[]>('http://172.16.81.150:3000/cadastro-usuario', this.formUsuario.value)
  .subscribe({
    next: (response) => alert('Usuário cadastrado com sucesso!'),
    error: (error) => alert('Erro ao cadastrar o usuário!')
  });
}
}
