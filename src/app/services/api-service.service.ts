import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '?api_key=9198fa6d9a9713bc6b03ee9582525917';
  private apiUrl = 'https://api.themoviedb.org/';
  imageBaseurl = 'https://image.tmdb.org/t/p/';


  constructor(private http: HttpClient) { }

  getList(category) {
    return this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
  }

  getMovieDetails(id){
    return this.http.get(this.apiUrl + '3/movie/' + id + this.apiKey);
  }

  getImageBaseUrl() {
    return this.imageBaseurl;
   }

  getSimilarMovies(id){
    return this.http.get(this.apiUrl + '3/movie/' + id +'/similar' + this.apiKey);
  }

   
}
