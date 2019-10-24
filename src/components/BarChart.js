import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  state = {
    data1: 1,
    data2: 2
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [this.state.data1, this.state.data2];
    const h = 100;
    const w = 100;
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 30)
      .attr('y', (d) => h - 10 * d)
      .attr('width', 25)
      .attr('height', (d) => d * 10)
      .attr('fill', 'green');
  }

  handleClick = ({ target }) => {
    this.setState(state => ({
      [target.name]: state[target.name] + parseInt(target.value)
    }));
    this.drawChart();
  }

  render() {
    return (
      <>
        <button name="data1" value="1" onClick={this.handleClick}>+</button>
        <button name="data1" value="-1" onClick={this.handleClick}>-</button>
        <button name="data2" value="1" onClick={this.handleClick}>+</button>
        <button name="data2" value="-1" onClick={this.handleClick}>-</button>
      </>
    );
  }
}

export default BarChart;
