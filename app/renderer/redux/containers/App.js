import React, { Component } from 'react'
import Titlebar from 'redux/components/Shared/Titlebar'

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Titlebar />
        {this.props.children}
      </div>
    );
  }
}
