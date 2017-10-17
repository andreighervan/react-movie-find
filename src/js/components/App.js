/**
 * Created by Andrei on 10/16/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');
var SearchForm = require('./SearchForm.js');
var MovieResults=require('./MovieResults');

function getAppState() {
    return {
        movies:AppStore.getMovieResults()
    }
}
var App = React.createClass({
    componentDidMount:function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        if(this.state.movies==''){
            var movieResults='';
        }else{
            var movieResults=<MovieResults movie={this.state.movies}/>
        }
        return (
            <div>
                <SearchForm/>
                {movieResults}
            </div>
        )
    },
    getInitialState:function(){
        return getAppState();
    },
    _onChange:function(){
        this.setState(getAppState());
    }
});

module.exports = App;