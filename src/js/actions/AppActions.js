var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
    searchMovies: function (movie) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    },
    receiveMovieResults:function(movies){
        console.log(movies);
    }
};

module.exports = AppActions;
