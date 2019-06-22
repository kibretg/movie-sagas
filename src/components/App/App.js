import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  getMovies = () => {
    this.props.dispatch({type: 'FETCH_MOVIES'})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <pre>
        {JSON.stringify(this.props.reduxState)}
        </pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (App);
