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
export class FormAtendimentoComponent implements OnInit{
  formatendimento!: FormGroup;
  
  equipamento_saude: { nome: string; tipo: string }[] = [];

  profissional_saude: { nome: string; especialidade: string }[] = [];

  atendimento_acesso: { tipo: string}[] = [];

  servico: { nome: string; tipo: string}[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
    this.formatendimento = this.fb.group({
      data: ['', Validators.required],
      horainicio: ['', Validators.required],
      horatermino: ['', Validators.required],
      nome_us: ['', Validators.required],
      tipo_us: ['', Validators.required],
      nome_prof: ['', Validators.required],
      especialidade: ['', Validators.required],
      tipo_acesso: ['', Validators.required],
      nome_servico: ['', Validators.required],
      tipo_servico: ['', Validators.required],
    });
    this.carregar_equipamento_saude();
    this.carregar_profissional_saude();
    // this.carregar_atendimento_acesso();
    this.carregar_servico();    
  }

  carregar_equipamento_saude(){
    this.http.get<{ nome: string; tipo: string }[]>('http://172.16.81.150:3000/ler-equipamento_saude')
    .subscribe({
      next: (dados) => {
        this.equipamento_saude = dados
        
      },
      error: (erro) => console.error('Erro ao carregar o equipamento de saúde.', erro)
    });
  }

  carregar_profissional_saude(){
    this.http.get<{ nome: string; especialidade: string }[]>('http://172.16.81.150:3000/ler-profissional_saude')
    .subscribe({
      next: (dados) => {
        this.profissional_saude = dados;
      },
      error: (erro) => console.error('Erro ao carregar profissional de saúde.', erro)
    });
  }
  // carregar_atendimento_acesso(){
  //   this.http.get<{ tipo: string }[]>('http://172.16.81.150:3000/ler-atendimento_acesso')
  //   .subscribe({
  //     next: (dados) => {
  //       this.atendimento_acesso = dados;
  //     },
  //     error: (erro) => console.error('Erro ao carregar os tipos de acesso.', erro)
  //   });
  // }

  carregar_servico(){
    this.http.get<{ nome: string; tipo: string }[]>('http://172.16.81.150:3000/ler-servico')
    .subscribe({
      next: (dados) => {
        this.servico = dados;
      },
      error: (erro) => console.error('Erro ao carregar os tipos de acesso.', erro)
    });
  }

  cadastrar(){
    if (this.formatendimento.valid){
      this.http.post('http://172.16.81.150:3000/cadastro-atendimento', this.formatendimento.value)
      .subscribe({
        next: (response) => alert('Atendimento cadastrado com sucesso!'),
        error: (error) => alert('Erro ao cadastrar o atendimento')
      });
    }
  }

  limparCampo(): void{
    this.formatendimento.reset();
  }  
}
