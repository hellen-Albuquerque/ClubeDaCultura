import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PlanosComponent } from './planos/planos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AdminComponent } from './admin/admin.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DelProdutoComponent } from './del-produto/del-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DelCategoriaComponent } from './del-categoria/del-categoria.component';
import { DadosComponent } from './dados/dados.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent },
  {path: 'planos', component: PlanosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'editar-produto/:id', component: PutProdutoComponent},
  {path: 'del-produto/:id', component: DelProdutoComponent},
  {path: 'editar-categoria/:id', component: PutCategoriaComponent},
  {path:"del-categoria/:id",component: DelCategoriaComponent},
  {path:"dados/:id",component: DadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
