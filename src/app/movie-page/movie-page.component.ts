import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieDetails;
  similarMovies;
  imgBaseUrl: string;
  posterUrl: string;
  overview: string = '';
  movieTitle: string = '';
  releaseDate: string = '';
  budget: string = '';
  revenue: string = '';
  vote: string = ''; 
  id;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   this.loadMovieDetails(this.id);
  }

  loadMovieDetails(id: number){
    this.apiService.getMovieDetails(id).subscribe( (response) => {
      this.movieDetails = response;
      this.overview = this.movieDetails.overview;
      this.movieTitle = this.movieDetails.original_title;
      this.releaseDate = this.movieDetails.release_date;
      this.budget = this.movieDetails.budget;
      this.revenue = this.movieDetails.revenue;
      this.vote = this.movieDetails.vote_average;

      this.imgBaseUrl = this.apiService.getImageBaseUrl();
      this.posterUrl = this.imgBaseUrl + 'w154' + this.movieDetails.poster_path;
    });
  }


}
