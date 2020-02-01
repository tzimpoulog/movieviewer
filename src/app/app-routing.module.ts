import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  {
    path: 'movie-list',
    component: MoviesListComponent
  },
  {
    path: '',
    component: GridViewComponent
  },
  { 
    path: ':id', 
    component: MoviePageComponent 
  },
  {
    path: '**',
    component: Notfound404Component
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
