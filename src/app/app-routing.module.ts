import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component'

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
