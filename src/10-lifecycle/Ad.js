import React, { Component } from 'react'

export class Ad extends Component {
  state = {
    name: 'zhaoqian'
  }
  render() {
    return (
      <div>
        {this.props.title}
        {this.state.name}
        <button onClick={() => this.setState({name:'xiaolei'})}>click</button>
      </div>
    )
  }
}

export default Ad