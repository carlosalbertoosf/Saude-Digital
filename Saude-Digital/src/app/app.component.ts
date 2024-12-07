import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormAtendimentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saude-Digital';
}
