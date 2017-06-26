import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <img
              src="https://pp.userapi.com/c638425/v638425918/29d7c/Jah37pgRGMU.jpg"
              alt="i've tried"
              style={{ height: 200, width: 200}}
          />
          <p>+{this.props.likes} - {this.props.dislikes}</p>
          <div>
              <button onClick={this.props.like}>Like</button>
              <button onClick={this.props.dislike}>Dislike</button>
              <button>Share</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    likes: state.get('likes'),
    dislikes: state.get('dislikes'),
});

const mapDispatchToProps = dispatch => ({
    like: () => dispatch({type: 'ADD_LIKE'}),
    dislike: () => dispatch({type: 'ADD_DISLIKE'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
