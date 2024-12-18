import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importing HttpClientModule here
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-digital-s-section',
  imports: [CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './digital-s-section.component.html',
  styleUrl: './digital-s-section.component.css',
})

export class DigitalSSectionComponent implements OnInit {
  atendimento: {
    data: string;
    horainicio: string;
    horatermino: string;
    acesso: string;
  }[] = [];
  equipamento:{
    rua:string;
    numero: number;
    bairro: string;
    cep: number
    nome: string;
    tipo: string;
    lat: number;
    lon: number;
    urls: string
  }[]=[];
  lat: number | null = null;  // Variável para armazenar a latitude
  lon: number | null = null;  // Variável para armazenar a longitude


  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    // this.carregar_equipamento();
    this.carregar_equipamento();
  }


  carregar_atendimento() {
    this.http.get<{
      data: string;
      horainicio: string;
      horatermino: string;
      acesso: string;
    }[]>('http://localhost:3000/ler-atendimento')
      .subscribe({
        next: (data) => {
          this.atendimento = data;
        },
        error: (err) => {
          console.error('Error loading data:', err);
        }
      });
  }


  carregar_equipamento() {
    this.http.get<{
      rua:  string;
      numero: number;
      bairro: string;
      cep: number;
      nome: string;
      tipo: string;
      lat: number;
      lon: number;
      urls: string;
    }[]>('http://localhost:3000/ler-equipamento_saude')
      .subscribe({
        next: (data) => {
          this.equipamento = data;
          console.log(this.equipamento);
       },
        error: (err) => {
          console.error('Error loading data:', err);
        }
      });
  }



}

