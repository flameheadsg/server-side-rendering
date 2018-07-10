import React, { Component } from 'react';

class Home extends Component {
  handleClick() {
    window.alert('success!!!');
  }

  render() {
    return (
      <div>
        <div>
          This is the Home component
        </div>
        <br /><br />
        <button onClick={this.handleClick}>
          Press me!!!
        </button>
      </div>
    );
  }
};

export default {
  component: Home
};
