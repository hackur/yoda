import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from 'routes'
import 'index.global.css'

const root = document.getElementById('root')
const rootClass = `os-${process.platform}`
root.classList.add(rootClass)

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);
