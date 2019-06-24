import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Edit from '../Edit/Edit'



class Details extends Component {
  // Renders the entire app on the DOM





  render() {
    return (
      
     <>
     <button>
         <Link to="/">Home</Link>
         </button>
     
     
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
     <ul>
     {this.props.reduxState.genresReducer.map(genre => {
        return <li key={genre.genres_id}>{genre.name}</li>
     })}
     </ul>
     <button>
         <Link to="/edit">Edit</Link>
         </button>
     
     </>
       
      
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (Details);
