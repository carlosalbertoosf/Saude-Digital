import { Routes } from '@angular/router';
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { FormEquipamentoComponent } from './form-equipamento/form-equipamento.component';

export const routes: Routes = [
    {
        path: '',
        component: FormAtendimentoComponent
    },
    
    {
        path: '',
        component: FormEquipamentoComponent
    }
];
