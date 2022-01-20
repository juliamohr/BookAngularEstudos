import { NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from '../core/guards/guards.guard';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { HomeComponent } from './book/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'livro',
    canActivate: [
      GuardsGuard
    ],
    loadChildren: async()=>
    import('./book/book.module').then((m)=> m.BookModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
