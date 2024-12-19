import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartona',
  imports: [CommonModule],
  templateUrl: './cartona.component.html',
  styleUrl: './cartona.component.css',
  standalone: true
})
export class CartonaComponent {
  @Output() fechar: EventEmitter<void> = new EventEmitter();
  @Input() atendimento:any = [];
  fecharCartona() {
    this.fechar.emit(); // Emite o evento para informar que o Cartona deve ser fechado
  }

}
