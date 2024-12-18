import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-servico',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './form-servico.component.html',
  standalone: true,
  styleUrl: './form-servico.component.css',
})
export class FormServicoComponent implements OnInit {
  formServico!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formServico = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
    });
    this.cadastrarServico();
  }

  cadastrarServico() {
    this.http
      .post<
        {
          nome: string;
          tipo: string;
        }[]
      >('http://172.16.81.150:3000/cadastro-servico', this.formServico.value)
      .subscribe({
        next: (response) => alert('Cadastro de serviço realizado com sucesso'),
        error: (error) => alert('Erro no cadastro de serviço.'),
      });
  }
}
