import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

import Cookbooks from './Cookbooks'
import Maps from './Maps'
import Abc from './Abc'
import Page404 from './Page404'
import AAA from './AAA'

import MyLink from './MyLink'

import './style.css'

class ReactRouter extends Component {
  render() {
    return (
      <>
        <ul>
          <MyLink url="/">Cookbooks</MyLink>
          <MyLink url="/maps">maps</MyLink>
          <MyLink url="/abc/12">abc</MyLink>
        </ul>
        <AAA></AAA>
        <Switch>
          <Route path="/" exact component={Cookbooks}></Route>
          <Route path="/maps" exact component={Maps}></Route>
          <Route path='/abc/:id' component={Abc}></Route>
          <Route path="*" component={Page404}></Route>
        </Switch>
      </>
    )
  }
}

export default ReactRouter