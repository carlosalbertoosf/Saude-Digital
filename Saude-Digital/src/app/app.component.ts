import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { DigitalSSectionComponent } from './digital-s-section/digital-s-section.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, DigitalSSectionComponent, RodapeComponent, FormAtendimentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saude-Digital';
}
