import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';



class Details extends Component {
  // Renders the entire app on the DOM





  render() {
    return (
      
     <>
     <div>
     <h1>{this.props.reduxState.movieItemReducer.title}</h1>
     </div>
     <div>
     <img src={this.props.reduxState.movieItemReducer.poster}
     alt={this.props.reduxState.movieItemReducer.title}></img>
     </div>
     <div>
     {this.props.reduxState.movieItemReducer.description}
     </div>
     </>
       
      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (Details);
