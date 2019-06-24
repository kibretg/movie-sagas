import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';



class MovieItem extends Component {
  // Renders the entire app on the DOM


  handlePosterClick = () => {
    console.log(`${this.props.movie.title} clicked`);
    this.props.dispatch({type: 'SET_SPECIFIC_MOVIE', payload: this.props.movie})
    this.props.history.push('/details')
  }


  render() {
    return (
      
     
     <Grid container justify="center">
        
      <Grid item xs={6}>
     <img src={this.props.movie.poster}
     alt={this.props.movie.title}
     value={this.props.movie.id}
     onClick={this.handlePosterClick}/>
     </Grid>
     <Grid item xs={6}>
     <h2>{this.props.movie.title}</h2>
     {this.props.movie.description}
     </Grid>
     
     </Grid>
       
      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (MovieItem);
