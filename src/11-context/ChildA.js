import React, { Component } from 'react'

import ChildAB from './ChildAB'

// import NameContext from './name-context'

import employeeContext from './employee-context'

class ChildA extends Component {
  static contextType = employeeContext

  render() {
    return (
      <>
        <ChildAB></ChildAB>
      </>
    )
  }
}

export default ChildA