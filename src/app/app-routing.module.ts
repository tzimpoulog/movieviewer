import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GridViewComponent } from './grid-view/grid-view.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  },
  {
    path: 'grid-view',
    component: GridViewComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
