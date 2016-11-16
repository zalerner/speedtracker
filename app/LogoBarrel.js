import React from 'react'
import { render } from 'react-dom'

class LogoBarrel extends React.Component {
  render() {
    return (
      <img src="https://www.barrelny.com/wp-content/uploads/barrel-white.png" width={this.props.width} style={{marginBottom: -11 + 'px'}}/>
    )
  }
}

export default LogoBarrel
