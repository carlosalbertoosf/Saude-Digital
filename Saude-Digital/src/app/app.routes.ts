import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DigitalSSectionComponent } from './digital-s-section/digital-s-section.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { FormEquipamentoComponent } from './form-equipamento/form-equipamento.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    },

    {
        path: '',
        component: DigitalSSectionComponent
    },

    {
        path: '',
        component: RodapeComponent
    },

    {
        path: 'formulario-atendimento',
        component: FormAtendimentoComponent
    },
    
    {
        path: 'formulario-equipamento',
        component: FormEquipamentoComponent
    },

    {
        path: 'formulario-usuario',
        component: FormUsuarioComponent
    }
];
