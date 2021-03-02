import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Specifying ‘root’ allows us to provide this
                     //service in AppModule
})
export class MovieService {

  constructor() { }

  moviesList = [ //syntax for multidimensional array
    {title: 'The GodFather', year :'1972', director: 'Francis Ford Coppola'},
  {title: 'Millers Crossing', year :'1990', Director: 'The Coen Brothers'},
  {title: 'Dial M for Murder', year :'1954', Director: 'Alfred Hitchcock'},
  {title: 'WhipLash', year :'2014', Director: 'Damien Chazelle'}
  ];

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }

  getMovies() { //this will return data
    return this.moviesList;
  }
}
