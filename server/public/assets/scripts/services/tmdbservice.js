myApp.service('tmdbservice', function($http, $location, mustwatchservice, trackupcomingService){
console.log('in tmdb');
//https://api.themoviedb.org/3/movie/550?api_key=e33ed2b0de74f8d2eeaec141145baf02
var mediaApi = "https://api.themoviedb.org/3/search/multi?api_key=e33ed2b0de74f8d2eeaec141145baf02";
// var imageApi = "https://api.themoviedb.org/3/search/multi?api_key=e33ed2b0de74f8d2eeaec141145baf02 & append_to_response = videos,images";
//setting up tmdb service
  //get the movies from themoviedb
  this.getMedia = function(searchbox){
    console.log('in the getMovies service function');
    return $http({
        method: 'GET',
        url: mediaApi + '&query=' + searchbox,
    }).then(function success(response) {
        // console.log('this is the response service', response);
        console.log('this is the response.data results', response.data.results);
      return response.data.results;
  }); //end http call
}; //end get movies function
});//end service
