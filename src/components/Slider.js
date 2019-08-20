import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
        <input type="range"
            id={this.props.name}
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onChange={this.props.change}
            step={this.props.step}
            />
    )
  }
}

export default Slider
