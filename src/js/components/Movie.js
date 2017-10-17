/**
 * Created by Andrei on 10/16/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Movie = React.createClass({
    render: function () {
return (
    <div className="well">
        <div className="row">
            <div className="col-md-4">
                <img className="thumbnail" src={this.props.movie.Poster}/>
            </div>
            <div className="col-md-8">
                <h4>{this.props.movie.Title}</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        Year release: {this.props.movie.Year}
                    </li>
                    <li className="list-group-item">
                        IMDB ID: {this.props.movie.imdbID}
                    </li>
                </ul>
                <a className="btn btn-primary" href="'http://www.imdb.com/title/' + {this.props.movie.imdbID}">View on IMDB</a>
            </div>
        </div>
    </div>
)
}
})
;

module.exports = Movie;

