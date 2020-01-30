import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  movieListHasData: boolean;
  selectedIndex: number = null;
 
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadMovieList('popular');
  }

  loadMovieList(category: string){
    this.apiService.getList(category).subscribe( (response) => {
      this.moviesList = response['results'];
    });    
  }

  listHasData(){
    if(this.moviesList.length == 0)
      this.movieListHasData = true
    else
    this.movieListHasData = false;
  }

  setIndex(index: number) {
    this.selectedIndex = index;
 }
  

}
