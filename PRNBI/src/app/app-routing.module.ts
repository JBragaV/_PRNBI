import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'secao1', loadChildren: './secoes/secao1/secao1.module#Secao1PageModule' },
  { path: 'secao2', loadChildren: './secoes/secao2/secao2.module#Secao2PageModule' },
  { path: 'secao3', loadChildren: './secoes/secao3/secao3.module#Secao3PageModule' },
  { path: 'secao4', loadChildren: './secoes/secao4/secao4.module#Secao4PageModule' },
  { path: 'peso', loadChildren: './peso/peso.module#PesoPageModule' },  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
