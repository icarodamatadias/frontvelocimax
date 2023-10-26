import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VeiculoRoutingModule } from './veiculo-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    ListagemComponent,
    EditComponent,
    ViewComponent,
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VeiculoModule { }
