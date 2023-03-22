export default class MovieList {
    constructor(name, movies=[]) {
        this.name=name;
        this.movies=movies;
        
    }
    // add movielist
    addMovie(movie) {
        this.movies.push(movie);
    }


    // read movielist
    readMovieList(listName) {
        console.log(`Movie List name: ${listName.name}`)
        let movies;
        this.movies.forEach(movie => {
            // if(movieList) {
                console.log(movie)
                })
                // viewerMovieList += movieList.name
                // movies += movieList.movies
                
    }

    // update movielist
    updateMovieList(change, movie, title, year, director, genre, averageRating) {
        if (change === 'delete') {
            for (var i = this.movies.length - 1; i >= 0; --i) {
               if (this.movies[i] == movie) {
                this.movies.splice(i,1);
            } 
        
            }

        }


    // delete movielist

    //add movie    
}}