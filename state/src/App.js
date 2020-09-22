import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    clickCount: 0,
    liked: false
  }

  handleClick = () => {
    console.log('click');
    // this.setState({
    //   clickCount: 5
    // })
    this.setState((state) => ({ clickCount: state.clickCount + 1 }))
  }

  handleLike = () => {
    this.setState((state) => ({
      liked: !state.liked
    }))
  }

  render() {
    // props are read only
    // this.props.name = 'bob';
    console.log(this.state.liked);
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <h1 > Counter: {this.state.clickCount}</h1 >
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.liked ? 'I like this component' : 'I don\'t like this component'}</h1>
        <button onClick={this.handleLike}>{this.state.liked ? 'Unlike' : 'Like'}</button>
      </>
    )
  }
}

export default App;
