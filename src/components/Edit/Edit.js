import React, { Component } from 'react';
import {connect} from 'react-redux';



class Edit extends Component {
  // Renders the entire app on the DOM
state = {
    title: '',
    description: '',
}

handleTitleChange = (event) => {
    this.setState({
        ...this.state,
        title: event.target.value,
       
    });
};

handleDescriptionChange = (event) => {
    this.setState({
        ...this.state,
        description: event.target.value
    });
};

handleCancelEdits = () => {
    this.setState({
        title: '',
        description: '',
    });
    this.props.history.push('/details');
}

saveNewEdits = () => {
    this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state});
    this.props.history.push('/');
}

  render() {
    return (


      <div>
          <br/>
          <br/>
          <br/>
          <input placeholder='Edit Title' type='text' value={this.state.title} onChange={this.handleTitleChange}></input>
          <br/>
          <br/>
          <textarea rows='10' cols='100' placeholder='Edit Description' type='type' value={this.state.description} onChange={this.handleDescriptionChange}/>
          <br/>
          <br/>
          <button onClick={this.saveNewEdits}>Save</button>
          <br/>
          <br/>
          <button onClick={this.handleCancelEdits}>Cancel</button>
          <br/>
          <br/>
      </div>
     
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});



export default connect(mapReduxStateToProps) (Edit);
