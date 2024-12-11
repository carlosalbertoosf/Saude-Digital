import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DigitalSSectionComponent } from './digital-s-section/digital-s-section.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, DigitalSSectionComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saude-Digital';
}
