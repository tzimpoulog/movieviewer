import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';


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

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadMovieList('popular');
  }

  loadMovieList(category: string){
    this.apiService.getList(category).subscribe( (response) => {
      this.moviesList = response['results'];
      this.moviesList.forEach(element => {
        this.posterPath = element.poster_path
      });
     
    });    
  }

  viewMoviepage(movie_id : any){
    let url: string = "/movie/" + movie_id
         this.router.navigateByUrl(url);
      }

}
