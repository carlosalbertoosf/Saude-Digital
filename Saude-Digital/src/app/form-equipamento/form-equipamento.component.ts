import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-equipamento',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './form-equipamento.component.html',
  styleUrl: './form-equipamento.component.css'
})
export class FormEquipamentoComponent implements OnInit{
  formEquipamento!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
      this.formEquipamento = this.fb.group({
        nome: ['', Validators.required],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cep: ['', Validators.required],
        tipo: ['', Validators.required]
      });
      this.cadastrar();
  }

  cadastrar(){
    this.http.post<{ 
      nome: string;
      rua: string;
      numero: string;
      bairro: string;
      cep: string;
      tipo: string;
    }[]>('http://172.16.81.150:3000/cadastro-equipamento_saude', this.formEquipamento.value)
    .subscribe({
      next: (response) => alert('Unidade cadastrado com sucesso!'),
      error: (error) => alert('Erro ao cadastrar a unidade!')
    });    
  }

  limparCampo(): void{
    this.formEquipamento.reset();
  }
}
