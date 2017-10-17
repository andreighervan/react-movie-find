/**
 * Created by Andrei on 10/16/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var SearchForm = React.createClass({
    render: function () {
        return (
            <div className="search-form">
                <h1 className="text-center">Search for a movie</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a movie title..."/>
                    </div>
                    <button className="btn btn-primary btn-block">Search movies</button>
                </form>
            </div>
        )
    },
    onSubmit: function (e) {
        e.preventDefault();
        var movie = {
            title: this.refs.title.value.trim()
        };
        AppActions.searchMovies(movie);
    }
});

module.exports = SearchForm;
