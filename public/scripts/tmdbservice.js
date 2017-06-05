
myApp.service(['$http','tmdbservice', function($http){
console.log('in tmdb');
//https://api.themoviedb.org/3/movie/550?api_key=e33ed2b0de74f8d2eeaec141145baf02
var movieApi = "https://api.themoviedb.org/3/search/multi?api_key=e33ed2b0de74f8d2eeaec141145baf02";
//setting up tmdb service
  //get the movies from themoviedb
  this.getMovies = function(){
    return $http({
        method: 'GET',
      url: movieApi + '&query=' + this.searchbox,
    }).then(function success(response) {
        console.log('this is the response service', response);
        console.log('this is the response.data results', response.data.results);
        this.movieList = response.data.results;
  }); //end http call
}; //end get movies function
}]);//end service
