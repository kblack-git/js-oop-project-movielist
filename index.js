import Movie from './Movie.js';
import MovieList from './MovieList.js';
import Viewer from './Viewer.js';

// create 2 new movies
let goodFellas = new Movie('Goodfellas', 1990, 'Martin Scorsese', 'action/drama', '3.5 stars')
let scarFace = new Movie('Scarface', 1983, 'Brian DePalma', 'action/drama', '3.5 stars' )

let policeAcademy5 = new Movie('Police Academy 5', 1988, 'Alan Myerson', 'comedy', '0 stars' )
let babyGeniuses = new Movie('Baby Geniuses', 1999, 'Bob Clark', 'comedy', '.5 stars')
// console.log(goodFellas, scarFace)
//create new movielist
let keithFavorite = new MovieList("Keith's favorites") 
let badMovies = new MovieList('Terrible Movies')
// console.log(keithFavorite)

// add movie to movielist
keithFavorite.addMovie(goodFellas);
// console.log(keithFavorite)
keithFavorite.addMovie(scarFace)
// console.log(keithFavorite)
badMovies.addMovie(policeAcademy5)
badMovies.addMovie(babyGeniuses)

// create new Viewer object (no w/o list)
let lee = new Viewer('Lee', '20', 'action')
// console.log(lee.movieLists)

// movielist to viewer

lee.addMovieList(keithFavorite)
lee.addMovieList(badMovies) 


// console.log(lee.movieLists)
// console.log(lee.readViewer())
// console.log(lee.removeMovieList())
lee.removeMovieList('Terrible Movies')
// console.log(lee.readViewer())
// console.log(lee.updateViewer('n','leeann'))
// console.log(lee.readViewer())
// console.log(lee.updateViewer('fg','drama'))
// console.log(lee.readViewer())
// console.log(lee.updateViewer('a','99'))
// console.log(lee.readViewer())

badMovies.readMovieList(badMovies)
badMovies.updateMovieList('delete', babyGeniuses)
badMovies.readMovieList(badMovies)
