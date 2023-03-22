export default class Viewer {
    constructor(name,age,favoriteGenre, movieLists=[]) {
        this.name=name;
        this.age=age;
        this.favoriteGenre=favoriteGenre;
        this.movieLists=movieLists;
    }
    // add movielist
    addMovieList(movieList) {
        this.movieLists.push(movieList)
        }

    // remove movielist
    removeMovieList(list) {
        // SAMPLE CODE FROM STACK OVERFLOW
        // for (var i = myArray.length - 1; i >= 0; --i) {
        //     if (myArray[i].field == "money") {
        //         myArray.splice(i,1);
        //     }
        // }

        for (let i = this.movieLists.length - 1; i >= 0; --i) {
            console.log(i)    
            if (this.movieLists[i].name == list) {
                    console.log(this.movieLists[i].name)
                    this.movieLists.splice(i,1);
                }
            }

    }    


    // read viewer
    readViewer() {

        let viewerMovieList;
        console.log(`Current information about movie fan: 
        Name: ${this.name}
        age: ${this.age}
        favorte genre: ${this.favoriteGenre}
        Movie Lists and movies: `)
        let movies;
        this.movieLists.forEach(movieList => {
            // if(movieList) {
                console.log(`Movie List name: ${movieList.name}`)
                movieList.movies.forEach (movie => {
                    console.log(movie)
                })
                // viewerMovieList += movieList.name
                // movies += movieList.movies
                })
      

            
    } 

   // update viewer
   updateViewer(firstLetterProperty,changeValue) {
    switch (firstLetterProperty!='n' || firstLetterProperty!='a' || firstLetterProperty!='fG'  ) {
        case (firstLetterProperty==='n'):
            this.name=changeValue;
            console.log('name changed')
            break;
        default:
            console.log('missing argument');
        case (firstLetterProperty==='a'):
            this.age=changeValue;
            console.log('age changed')
            break;
        case (firstLetterProperty==='fg'):
            this.favoriteGenre=changeValue;
            console.log('favorite genre changed')
            break;        


   }     

   }


   }