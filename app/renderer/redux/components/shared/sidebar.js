import React, { Component } from 'react'
import { Link } from 'react-router'
import Constants from 'redux/constants'
import { uuid, ucfirst } from 'redux/utils'
import s from 'styles/sidebar.css'

class Sidebar extends Component {
  renderSidebarNav() {
    return Object.keys(Constants.channels).map(this.renderSidebarLink)
  }

  renderSidebarLink(channel) {
    let href = '/channels/' + channel;
    return <li key={uuid()}><Link to={href}>{ucfirst(channel)}</Link></li>
  }

  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <h4 className={s.sidebarTitle}>Best of youtube</h4>
        <ul className={s.sidebarLinks}>
          {this.renderSidebarNav()}
        </ul>
      </div>
    );
  }
}

export default Sidebar
