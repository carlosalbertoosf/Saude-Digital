import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importing HttpClientModule here
import { HttpClient } from '@angular/common/http';
import { CartonaComponent } from '../cartona/cartona.component';

@Component({
  selector: 'app-digital-s-section',
  imports: [CommonModule, HttpClientModule, CartonaComponent],
  standalone: true,
  templateUrl: './digital-s-section.component.html',
  styleUrl: './digital-s-section.component.css',
})

export class DigitalSSectionComponent implements OnInit {
  showCartona: boolean = false;
  atendimentoSelecionado: any = null;

  mostrarAtendimento(idEquipamento: number) {
    // Filtra os atendimentos para pegar o que corresponde ao id_equipamento
    this.atendimentoSelecionado = this.atendimento.filter(
      (atendimento) => atendimento.id_equipamento === idEquipamento
    );
    this.showCartona = true; // Exibe o Cartona
  }
  fecharCartona() {
    this.showCartona = false; // Fecha o Cartona
  }
  atendimento: {
    data: string;
    horainicio: string;
    horatermino: string;
    id_servico: number;
    id_profissional: number;
    id_equipamento: number;
  }[] = [];
  equipamento:{
    id_equipamento:number;
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
      id_servico: number;
      id_profissional: number;
      id_equipamento: number;
    }[]>('http://172.16.81.150:3000/ler-atendimento')
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
      id_equipamento: number;
      rua:  string;
      numero: number;
      bairro: string;
      cep: number;
      nome: string;
      tipo: string;
      lat: number;
      lon: number;
      urls: string;
    }[]>('http://172.16.81.150:3000/ler-equipamento_saude')
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

