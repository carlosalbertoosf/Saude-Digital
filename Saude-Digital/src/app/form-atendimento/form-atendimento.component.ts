import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-atendimento',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form-atendimento.component.html',
  styleUrl: './form-atendimento.component.css'
})
export class FormAtendimentoComponent implements OnInit {
  formatendimento!: FormGroup;

  servico: { id_servico: number; tipo: string }[] = [];

  profissional_saude: { id_profissional: number; nome: string }[] = [];

  equipamento_saude: { id_equipamento: number; nome: string }[] = [];

  usuario: { id_usuario: number; nome: string }[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formatendimento = this.fb.group({
      data: ['', Validators.required],
      horainicio: ['', Validators.required],
      horatermino: ['', Validators.required],
      id_servico: ['', Validators.required],
      id_profissional: ['', Validators.required],
      id_equipamento: ['', Validators.required],
      id_usuario: ['', Validators.required],
    });
    this.carregar_servico();
    this.carregar_profissional_saude();
    this.carregar_equipamento_saude();
    this.carregar_usuario();
  }

  carregar_servico() {
    this.http.get<{ id_servico: number; tipo: string }[]>('http://172.16.81.150:3000/ler-servico')
      .subscribe({
        next: (dados) => {
          this.servico = dados;
        },
        error: (erro) => console.error('Erro ao carregar os tipos de acesso.', erro)
      });
  }

  carregar_profissional_saude() {
    this.http.get<{ id_profissional: number; nome: string }[]>('http://172.16.81.150:3000/ler-profissional_saude')
      .subscribe({
        next: (dados) => {
          this.profissional_saude = dados;
        },
        error: (erro) => console.error('Erro ao carregar profissional de saúde.', erro)
      });
  }

  carregar_equipamento_saude() {
    this.http.get<{ id_equipamento: number; nome: string }[]>('http://172.16.81.150:3000/ler-equipamento_saude')
      .subscribe({
        next: (dados) => {
          this.equipamento_saude = dados

        },
        error: (erro) => console.error('Erro ao carregar o equipamento de saúde.', erro)
      });
  }

  carregar_usuario() {
    this.http.get<{ id_usuario: number; nome: string }[]>('http://172.16.81.150:3000/ler-usuario')
      .subscribe({
        next: (dados) => {
          this.usuario = dados;
        },
        error: (erro) => console.error('Erro ao carregar o usuario.', erro)
      });
  }

  cadastrar() {
    if (this.formatendimento.valid) {
      this.http.post('http://172.16.81.150:3000/cadastro-atendimento', this.formatendimento.value)
        .subscribe({
          next: (response) => {
            alert('Atendimento cadastrado com sucesso!');
            this.formatendimento.reset();
            this.formatendimento.get('id_servico')?.setValue('Selecione o Serviço');
            this.formatendimento.get('id_profissional')?.setValue('Selecione o Profissional');
            this.formatendimento.get('id_atendimento')?.setValue('Selecione a Unidade');
            this.formatendimento.get('id_usuario')?.setValue('Selecione o Usuário');
          },
          error: (error) => {

            console.log(error);

            alert(`Erro ao cadastrar o atendimento.`)
          }        
        });
    }
  }

  limparCampo(): void {
    this.formatendimento.reset();
  }
}