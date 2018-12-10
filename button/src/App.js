import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    }
  }
  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <span>{this.state.isLiked ? '取消' : '点赞'}</span>
        <span>👍</span>
      </div>
    );
  }
}

export default App;
