import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';



class Home extends Component {
  // Renders the entire app on the DOM


  

  render() {
    return (
      
     <>
     <h1>Movie List</h1>
     {this.props.reduxState.moviesReducer.map(movie => 
        <MovieItem movie={movie} key={movie.id} history={this.props.history} />
      )}
     </>
       
      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (Home);
