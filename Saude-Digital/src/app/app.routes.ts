import { Routes } from '@angular/router';
import { DigitalSSectionComponent } from './digital-s-section/digital-s-section.component';
import { FormUsuarioLoginComponent } from './form-usuario-login/form-usuario-login.component';
import { FormUsuarioCadastroComponent } from './form-usuario-cadastro/form-usuario-cadastro.component';
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { FormEquipamentoComponent } from './form-equipamento/form-equipamento.component';

export const routes: Routes = [
  {
    path: '',
    component: DigitalSSectionComponent,
  },
  {
    path: 'formulario-usuario-login',
    component: FormUsuarioLoginComponent,
  },
  {
    path: 'formulario-usuario-cadastro',
    component: FormUsuarioCadastroComponent,
  },
  {
    path: 'formulario-atendimento',
    component: FormAtendimentoComponent,
  },
  {
    path: 'formulario-equipamento',
    component: FormEquipamentoComponent,
  },
];
