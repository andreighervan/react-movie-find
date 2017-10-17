/**
 * Created by Andrei on 10/16/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var Movie = require('./Movie');

var MovieResults = React.createClass({
    render: function () {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                {this.props.movies.map(function (movie, i) {
                    return (
                        <Movie movie={movie} key={i}/>
                    )
                })}
            </div>
        )
    }
});

module.exports = MovieResults;

