import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../Home/Home'
import Details from '../Details/Details';
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM
  getMovies = () => {
    this.props.dispatch({type: 'FETCH_MOVIES'})
  }

  getTags = () => {
    this.props.dispatch({type: 'SET_TAGS'})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      

      <Router>
        <div>
        <Route path="/" exact component={MovieList}/>
        <Route path="/details" exact component={Details}/>
        <Route path="/edit" exact component={Edit}/>
        </div>
      </Router>

      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (App);
