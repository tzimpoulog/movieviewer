import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { Categories } from '../enums/enum-categories';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  moviesList;
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/' + 'w154';
  posterUrl: string;
  posterPath: string;
  movieCategories;
  movieGenres;
  erroMessage:string = '';
  hasError: boolean = false;
  isCollapsed = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadMovieList('popular');
    this.getCategories();
  }

  loadMovieList(category: string) {
    this.apiService.getList(category).subscribe((response) => {
      this.moviesList = response['results'];
      this.moviesList.forEach(element => {
        this.posterPath = element.poster_path
      },error=>{
        this.erroMessage = 'An error occured!Please try again later!';
        this.hasError = true;
        console.log(error);
      });
    });
  }

  viewMoviepage(movie_id: any) {
    let url: string = "/movie/" + movie_id
    this.router.navigateByUrl(url);
  }

  getCategories() {
    this.apiService.getGenreList().subscribe((response) => {
      this.movieCategories = response['results'];
    });
  }

  getMoviesByGenre(category) {
    let genreId = this.categoryToGenreId(category);
    this.apiService.getListByGenre(genreId).subscribe((response) => {
      this.moviesList = response['results'];
    },error=>{
      this.erroMessage = 'An error occured!Please try again later!';
      this.hasError = true;
      console.log(error);
    });
  }

  categoryToGenreId(genre) {
    switch (genre) {
      case 'Action':
        return Categories.Action;
      case 'Adventure':
        return Categories.Adventure;
      case 'Animation':
        return Categories.Animation;
      case 'Comedy':
        return Categories.Comedy;
      case 'Crime':
        return Categories.Crime;
      case 'Horror':
        return Categories.Horror;
      case 'Drama':
        return Categories.Drama;
      case 'Mystery':
        return Categories.Mystery;
      case 'Romance':
        return Categories.Romance;
      case 'ScienceFiction':
      return Categories.ScienceFiction
      default:
        return Categories.Action;
        break;
    }
  }

}
