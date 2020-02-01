import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { ApiService } from './services/api-service.service';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { FooterComponent } from './footer/footer.component';
import { MoviePageComponent } from './grid-view/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    GridViewComponent,
    Notfound404Component,
    FooterComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
