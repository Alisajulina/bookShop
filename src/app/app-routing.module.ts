import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule),
    canActivate: []
  },

  {
    path: '404',
    loadChildren: () => import('./_modules/error-page/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
