import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class PriceSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      price: 100
    }
  }

  handleOnChange = (value) => {
    this.setState({
      price: value
    })

    this.props.handlePrice(value);
  }

  render() {
    let { price } = this.state
    return (
      <Slider
        min={0}
        max={100}
        step={1}
        value={price}
        labels={{ 0: 'Min', 100: 'Max'}}
        onChange={this.handleOnChange}
      />
    )
  }
}

export default PriceSlider;
