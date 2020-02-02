import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails;
  similarMovies;
  imgBaseUrl: string;
  posterUrl: string;
  @Input() dataStatus: boolean
  overview: string = '';
  movieTitle: string = '';
  releaseDate: string = '';
  budget: string = '';
  revenue: string = '';
  vote: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadMovieDetails(419704);
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

  loadSimilarMovies(id: number){
    this.apiService.getSimilarMovies(id).subscribe((response) => {
      this.similarMovies = response;
        console.log(this.similarMovies);
    });
  }

}
