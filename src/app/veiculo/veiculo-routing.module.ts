import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { ViewComponent } from './view/view.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  //{ path: 'veiculos', redirectTo: 'veiculos/listagem', pathMatch: 'full'},
  { path: 'veiculos', component: ListagemComponent},
  { path: 'veiculos/veiculoId/view', component: ViewComponent },
  { path: 'veiculos/cadastro', component:CadastroComponent },
  { path: 'veiculos/veiculoId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule { }