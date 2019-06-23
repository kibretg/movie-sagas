import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'



class MovieItem extends Component {
  // Renders the entire app on the DOM


  handlePosterClick = () => {
    console.log(`${this.props.movie.title} clicked`);
    this.props.dispatch({type: 'SET_SPECIFIC_MOVIE', payload: this.props.movie})
    this.props.history.push('/details')
  }


  render() {
    return (
      
     <>
      <h2>{this.props.movie.title}</h2>
     <img src={this.props.movie.poster}
     alt={this.props.movie.title}
     value={this.props.movie.id}
     onClick={this.handlePosterClick}/>
     <br/>
     {this.props.movie.description}
     <br/>
     <br/>
     <br/>
       
     </>
       
      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (MovieItem);
