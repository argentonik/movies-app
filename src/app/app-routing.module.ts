import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./movie/feature/movie-list/movie-list.module').then(m => m.MovieListModule)
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./movie/feature/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
