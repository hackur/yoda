import React, { Component } from 'react'

class Main extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default Main
